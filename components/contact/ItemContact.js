import React from "react";

const ItemContact = ({ text, icon, error }) => {
  return (
    <div>
      <div className="flex items-center space-x-2 w-full text-lg">
        <div className=" text-md">{icon}</div>
        <>{text}</>
        <p className="text-red-500">*</p>
      </div>
      {error}
    </div>
  );
};

export default ItemContact;
