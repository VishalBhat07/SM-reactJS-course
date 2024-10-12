import "./style.css";

const ProductList = ({ name, city, data }) => {
  const flag = true;

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

  return (
    <div>
      <h1>E-commerce product list</h1>
      {renderTextBlock}
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
