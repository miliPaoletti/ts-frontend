import React from "react";

const ItemContact = ({ text, error }) => {
  return (
    <div>
      <div className="input">
        <div className="flex text-lg">{text}</div>
      </div>
      {error}
    </div>
  );
};

export default ItemContact;
