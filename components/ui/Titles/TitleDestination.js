import React from "react";

const TitleDestination = ({ text }) => {
  return (
    <div className="font-bold text-2xl md:text-3xl text-left p-2 my-6 uppercase border-4 border-y-0 pl-5 border-transparent border-l-orange-950">
      <p>{text}</p>
    </div>
  );
};

export default TitleDestination;
