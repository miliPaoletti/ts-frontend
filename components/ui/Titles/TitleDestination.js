import React from "react";

const TitleDestination = ({ text }) => {
  return (
    <div className="font-bold text-2xl md:text-3xl p-2 my-6 uppercase text-center pl-5 ">
      <p>{text}</p>
    </div>
  );
};

export default TitleDestination;
