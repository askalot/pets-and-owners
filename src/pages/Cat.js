import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Card from "../components/base/Card";
import Icon from "../components/base/Icon";

import CatPhoto from "../components/cats/CatPhoto";

import { OwnersContext, OwnersProvider } from "../context/OwnersProvider";

const Cat = () => {
  const params = useParams();
  const catName = params.catId.split("-")[0];
  const owner = params.catId.split("-")[1];

  return (
    <main className="l-container l-flow page">
      <header className="l-align-items--center l-display--flex">
        <Link to="/" className="s-padding--0_5em">
          <Icon icon="chevron-left" />
          <span className="visually-hidden">Back</span>
        </Link>
        <h1>{catName}</h1>
      </header>

      <Card>
        <CatPhoto
          catName={catName}
          url={`${process.env.REACT_APP_CAT_PHOTO_API_URL}${catName}`}
        />
      </Card>

      <Card>
        <header className="card__header">
          <h2 className="l-align-items--center l-display--flex s-gap--0_5em">
            <Icon icon="user-circle" />
            Owner
          </h2>
        </header>

        <footer className="card__footer">
          <OwnersProvider>
            <OwnersContext.Consumer>
              {(context) => (
                <>
                  {context.state.people
                    .filter((person) => person.name === owner)
                    .map((person, index) => (
                      <ul
                        key={index}
                        className="l-align-items--center l-display--flex l-justify-content--space-between l-list-seperated-v"
                      >
                        <li className="l-display--flex l-flex-direction--column s-gap--0_25em">
                          <span className="label">Name</span>
                          {person.name}
                        </li>

                        <li className="l-display--flex l-flex-direction--column s-gap--0_25em">
                          <span className="label">Gender</span>
                          <span className="l-align-items--center l-display--flex s-gap--0_25em">
                            <Icon
                              icon={
                                person.gender === "Female" ? "venus" : "mars"
                              }
                            />
                            {person.gender}
                          </span>
                        </li>

                        <li className="l-display--flex l-flex-direction--column s-gap--0_25em">
                          <span className="label">Age</span>
                          {person.age}
                        </li>
                      </ul>
                    ))}
                </>
              )}
            </OwnersContext.Consumer>
          </OwnersProvider>
        </footer>
      </Card>
    </main>
  );
};

export default Cat;
