import React from "react";
import moment from "moment";

const Item = ({ titreItem, dateItem, descriItem }) => (
  <div>
    <h2> {titreItem}</h2>
    <div>
      <p> {moment(dateItem).format("")} </p>
      <p> {descriItem} </p>
    </div>
  </div>
);
export default Item;
