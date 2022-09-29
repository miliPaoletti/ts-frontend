import { useState } from "react";

const useInput = (initialState) => {
  const [input, setInput] = useState(initialState);

  const handleChangeInput = (event) => {
    setInput(event.target.value.toLowerCase());
  };

  return { input, handleInput: handleChangeInput };
};

export default useInput;
