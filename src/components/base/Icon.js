import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faChevronLeft,
  faMars,
  faUserCircle,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";

// Wrapper for Font Awesome Icons
// Each icon needs to be imported and mapped before it can be consumed
const Icon = ({ icon }) => {
  switch (icon) {
    case "cat":
      return <FontAwesomeIcon icon={faCat} />;

    case "chevron-left":
      return <FontAwesomeIcon icon={faChevronLeft} />;

    case "mars":
      return <FontAwesomeIcon icon={faMars} />;

    case "user-circle":
      return <FontAwesomeIcon icon={faUserCircle} />;

    case "venus":
      return <FontAwesomeIcon icon={faVenus} />;

    default:
      return <span></span>;
  }
};

export default Icon;
