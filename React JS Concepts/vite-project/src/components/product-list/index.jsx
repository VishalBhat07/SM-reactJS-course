import { useEffect, useState } from "react";
import "./style.css";

const initialState = true;

const ProductList = ({ name, city, data }) => {
  const [flag, setFlag] = useState(initialState);
  const [count, setCount] = useState(0);
  const [styleChange, setStyleChange] = useState(false);

  // function renderTextBlock(getFlag) {
  //   return getFlag ? (
  //     <h4>
  //       My name is {name} and I belong to {city}
  //     </h4>
  //   ) : (
  //     <h4>Hello world</h4>
  //   );
  // }

  const renderTextBlock = flag ? (
    <h4>
      My name is {name} and I belong to {city}
    </h4>
  ) : (
    <h4>Hello world</h4>
  );

  const handleToggleText = () => {
    setFlag(!flag);
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setFlag(!flag);
    console.log("Flag set to False");

    return () => {
      console.log("Component is getting unmounted");
    };
  }, []); // This will run only once on page load

  useEffect(() => {
    console.log("Count value :", count);
    if (count == 10) setStyleChange(true);
  }, [count]);

  return (
    <div>
      <h1>E-commerce product list</h1>
      <button
        style={{ padding: "10px", backgroundColor: "yellow" }}
        onClick={handleToggleText}
      >
        Toggle text
      </button>
      {renderTextBlock}

      <div>
        <button
          style={{ backgroundColor: styleChange ? "yellow" : null }}
          onClick={handleCount}
        >
          Increase count
        </button>
        <p>Count is {count}</p>
      </div>
      <ul>
        {data.map((singleItem, index) => (
          <li style={{ padding: "10px", borderColor: "blue" }} key={index}>
            {singleItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
