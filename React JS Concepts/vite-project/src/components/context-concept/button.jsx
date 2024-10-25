import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

const ContextButtonComponent = () => {
  const { handleThemeChange } = useContext(GlobalContext);

  return (
    <>
      <button onClick={handleThemeChange}>change theme</button>
    </>
  );
};

export default ContextButtonComponent;
