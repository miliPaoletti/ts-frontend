import { FORM_WORK_WITH_US_DATA } from "components/utils/constants";
import React from "react";

const ItemContact = ({ text, error, placeholder }) => {
  return (
    <div>
      <label className="text-xs">{placeholder}</label>
      <div className="input">
        <div className="flex text-lg">{text}</div>
      </div>
      {error}
    </div>
  );
};

export default ItemContact;
