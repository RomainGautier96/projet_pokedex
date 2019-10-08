import React from "react";
import Item from "./Item.js";

const List = ({ data }) => (
  <ul>
    {data.map((item, i) => (
      <Item key={i} {...item} />
    ))}
  </ul>
);

export default List;
