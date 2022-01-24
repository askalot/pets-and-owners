import React from "react";

import "./Card.scss";

// This could use slots for header and footer in a more complex solution
const Card = ({ children }) => <div className="card">{children}</div>;

export default Card;
