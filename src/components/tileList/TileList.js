import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  const tiles = data.map((contact, i) => {
    const { name, ...description } = contact;
    return <Tile name={name} description={description} key={i} />;
  });
  return <div>{tiles}</div>;
};
