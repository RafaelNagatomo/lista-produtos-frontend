import React from "react";
import Item from "./Item";

export default function List(props) {
  const items = props.items;

  return (
    <div>
      <h2>{props.listname}</h2>
      <ul>
        <Item name={"Meu item"} />
        <Item name={"Meu item 2"} />
        {items.map((item) => (
          <Item key={item.id} name={item.name} status={item.done} />
        ))}
      </ul>
    </div>
  );
}
