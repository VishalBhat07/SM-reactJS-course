import "./App.css";
import ClassBasedComponent from "./components/class-based.jsx";
import FunctionBasedComponent from "./components/function-based.jsx";
import ProductList from "./components/product-list/index.jsx";

const DummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
  return (
    <>
      <div>
        <h1>React JS course</h1>
        <ClassBasedComponent />
        {/* <FunctionBasedComponent />
        <ProductList name="Vishal" city="Bengaluru" data={DummyProductData} /> */}
      </div>
    </>
  );
}

export default App;
