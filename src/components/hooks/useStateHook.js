import { useState } from "react";

const useStateHook = (defaultVal = null) => {
  const [value, setValue] = useState(defaultVal);

  // const handleChange = e => {
  //     setValue(e.target.value)
  // }

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};

export default useStateHook;
