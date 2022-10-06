const InputContainer = ({ content, icon }) => {
  return (
    <div className="flex-grow flex items-center md:border-none md:w-auto w-full bg-white md:bg-transparent py-0 z-2 mb-2 border md:mb-0 md:border-0 first:mt-2 md:first:mt-0 shadow-md">
      {icon}
      {content}
    </div>
  );
};

export default InputContainer;
