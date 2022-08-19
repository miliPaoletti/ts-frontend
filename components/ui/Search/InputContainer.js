const InputContainer = ({ content, icon }) => {
  return (
    <div className="flex-grow flex items-center md:border-none md:w-auto w-full bg-white md:bg-transparent py-0 z-2 ">
      {icon}
      {content}
    </div>
  );
};

export default InputContainer;
