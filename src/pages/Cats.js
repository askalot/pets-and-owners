import { Component } from "react";

import Card from "../components/base/Card";
import Icon from "../components/base/Icon";

import CatListItem from "../components/cats/CatListItem";

import { OwnersContext, OwnersProvider } from "../context/OwnersProvider";

class Cats extends Component {
  render() {
    return (
      <main className="l-container l-flow page" style={{ "--gap": "2em" }}>
        <h1>
          <Icon icon="cat" /> Cats
        </h1>

        <Card>
          <header className="card__header">
            <h2 className="l-align-items--center l-display--flex s-gap--0_5em l-justify-content--center">
              <Icon icon="venus" /> Female owned
            </h2>
          </header>

          <ul className="l-list-seperated">
            <OwnersProvider>
              <OwnersContext.Consumer>
                {(context) => (
                  <>
                    {context.state.cats.femaleOwned.map((catName, index) => (
                      <li key={index}>
                        <CatListItem
                          catName={catName}
                          ownerName={context.getOwnerByGenderAndPetName(
                            "Female",
                            catName
                          )}
                        />
                      </li>
                    ))}
                  </>
                )}
              </OwnersContext.Consumer>
            </OwnersProvider>
          </ul>
        </Card>

        <Card>
          <header className="card__header">
            <h2 className="l-align-items--center l-display--flex s-gap--0_5em l-justify-content--center">
              <Icon icon="mars" /> Male owned
            </h2>
          </header>

          <ul className="l-list-seperated">
            <OwnersProvider>
              <OwnersContext.Consumer>
                {(context) => (
                  <>
                    {context.state.cats.maleOwned.map((catName, index) => (
                      <li key={index}>
                        <CatListItem
                          catName={catName}
                          ownerName={context.getOwnerByGenderAndPetName(
                            "Male",
                            catName
                          )}
                        />
                      </li>
                    ))}
                  </>
                )}
              </OwnersContext.Consumer>
            </OwnersProvider>
          </ul>
        </Card>
      </main>
    );
  }
}

export default Cats;
