import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
    <div>
      <h2>{props.listname}</h2>
      <ul>
        <Item name={"Meu item"} />
      </ul>
    </div>
  );
};

export default List;
