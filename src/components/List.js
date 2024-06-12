import React from "react";
import Item from "./Item";

export default function List(props) {
  return (
    <div>
      <h2>{props.listname}</h2>
      <ul>
        <Item name={"Meu item"} />
        <Item name={"Meu item 2"} />
      </ul>
    </div>
  );
}
