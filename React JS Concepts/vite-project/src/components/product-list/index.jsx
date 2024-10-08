import "./style.css";

const ProductList = ({ name, city, data }) => {
  const flag = true;
  return (
    <div>
      <h1>E-commerce product list</h1>
      {flag ? (
        <h4>
          My name is {name} and I belong to {city}
        </h4>
      ) : (
        <h4>Hello world</h4>
      )}

      <ul>
        {data.map((singleItem, index) => (
          <li key={index}> {singleItem} </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
