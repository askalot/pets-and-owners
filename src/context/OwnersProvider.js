import { Component, createContext } from "react";

const OwnersContext = createContext();

class OwnersProvider extends Component {
  state = {
    people: [],
    owners: {
      female: [],
      male: [],
    },
    cats: {
      femaleOwned: [],
      maleOwned: [],
    },
  };

  setOwnersByGender(owners) {
    this.setState({
      owners: {
        female: this.filterPeopleByGender(owners, "Female"),
        male: this.filterPeopleByGender(owners, "Male"),
      },
    });
  }

  setCatsByOwnerGender() {
    this.setState({
      cats: {
        femaleOwned: this.getPetNamesFilteredByType(
          this.state.owners.female,
          "Cat"
        ),
        maleOwned: this.getPetNamesFilteredByType(
          this.state.owners.male,
          "Cat"
        ),
      },
    });
  }

  filterPeopleByGender(people, gender) {
    return people.filter((person) => person.gender === gender);
  }

  filterPetsByType(pets, type) {
    return pets.filter((pet) => pet.type === type);
  }

  getAllPets(owners) {
    return owners.map((owner) => owner.pets).filter((pet) => pet !== null);
  }

  getPetNamesFilteredByType(owners, petType) {
    const allPets = this.getAllPets(owners).flat();

    return this.filterPetsByType(allPets, petType)
      .map((pet) => pet.name)
      .sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
  }

  async componentDidMount() {
    const ownersApiUrl = process.env.REACT_APP_OWNERS_API_URL;

    return await fetch(ownersApiUrl)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        this.setState({ people: data });
        this.setOwnersByGender(data);
        this.setCatsByOwnerGender();
      })
      .catch(function (err) {
        console.warn("Something went wrong.", err);
      });
  }

  render() {
    return (
      <OwnersContext.Provider
        value={{
          state: this.state,

          getOwnerByGenderAndPetName: (gender, petName) => {
            return this.filterPeopleByGender(this.state.people, gender).filter(
              (person) => {
                return person.pets?.find((pet) => pet.name === petName);
              }
            )[0].name;
          },

          getOwner: (petName) => {
            return this.state.people.filter((person) => {
              return person.pets?.find((pet) => pet.name === petName);
            })[0];
          },
        }}
      >
        {this.props.children}
      </OwnersContext.Provider>
    );
  }
}

export { OwnersContext, OwnersProvider };
