import React from "react";
import "./CatPhoto.scss";

const CatPhoto = ({ catName, url }) => (
  <div className="cat-photo">
    <img src={url} alt={`${catName} posing`} />
  </div>
);

export default CatPhoto;
