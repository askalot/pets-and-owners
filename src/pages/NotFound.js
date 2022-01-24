import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/base/Card";
import Icon from "../components/base/Icon";

const NotFound = () => (
  <main className="l-container l-flow page">
    <h1>Not found</h1>

    <Card>
      <header className="card__header l-align-items--center l-display--flex">
        <Link
          to="/"
          className="s-padding--0_5em l-display--flex l-align-items--center s-gap--0_5em"
        >
          <Icon icon="chevron-left" />
          <span>All cats</span>
        </Link>
      </header>

      <p className="s-padding--1em">
        That page doesn't exist on this site, please go back to{" "}
        <Link to="/">home</Link>.
      </p>
    </Card>
  </main>
);

export default NotFound;
