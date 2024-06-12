import React from "react";

const Item = (props) => {
  const status = props.status;

  return (
    <li>
      {props.name} Status: {status ? "completo" : "incompleto"}
    </li>
  );
};

export default Item;
