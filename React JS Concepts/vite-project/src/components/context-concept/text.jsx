import React, { useContext } from "react";
import { GlobalContext } from "../../Context";

const ContextTextComponent = () => {
  const { theme } = useContext(GlobalContext);
  console.log(theme);

  return (
    <>
      {theme === "light" ? (
        <div
          style={{
            color: theme === "light" ? "green" : "black",
            width: "200px",
            fontWeight: "bold",
          }}
        >
          light theme
        </div>
      ) : (
        <div>dark theme</div>
      )}
    </>
  );
};

export default ContextTextComponent;
