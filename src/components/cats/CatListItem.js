import React from "react";
import { Link } from "react-router-dom";

import Icon from "../base/Icon";

const CatListItem = ({ catName, ownerName }) => (
  <Link to={`/cats/${catName}-${ownerName}`} className="s-padding--1em">
    <span className="visually-hidden">Cat:</span>
    <span>{catName}</span>

    <span className="label l-align-items--center l-display--flex s-gap--0_5em">
      <span className="visually-hidden">, Owner:</span>
      {ownerName}
      <Icon icon="user-circle" />
    </span>
  </Link>
);

export default CatListItem;
