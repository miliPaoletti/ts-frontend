const TitlePrimary = ({ text, text2 }) => {
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase  mb-8  text-center pl-5 ">
      {text} <span className="font-bold text-orange-950"> {text2}</span>
    </h2>
  );
};

export default TitlePrimary;
