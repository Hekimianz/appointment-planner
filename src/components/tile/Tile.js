import React from "react";

export const Tile = ({ name, description }) => {
  const descriptions = Object.keys(description).map((key, i) => {
    return (
      <p className="tile" key={i}>
        {description[key]}
      </p>
    );
  });

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptions}
    </div>
  );
};
