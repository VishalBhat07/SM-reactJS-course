import "./App.css";
import ClassBasedComponent from "./components/class-based.jsx";
import FunctionBasedComponent from "./components/function-based.jsx";
import ProductList from "./components/product-list/index.jsx";
import User from "./components/users/index.jsx";
import ContextButtonComponent from "./components/context-concept/button.jsx";
import ContextTextComponent from "./components/context-concept/text.jsx";
import UseReducerExample from "./components/use-reducer-example.jsx";

const DummyProductData = ["Product 1", "Product 2", "Product 3"];

function App() {
  return (
    <>
      <div>
        <h1>React JS course</h1>
        {/* <ClassBasedComponent /> */}
        {/* <FunctionBasedComponent /> */}
        {/* <ProductList name="Vishal" city="Bengaluru" data={DummyProductData} /> */}
        {/* <User/> */}
        {/* <ContextButtonComponent />
        <ContextTextComponent /> */}
        <UseReducerExample />
      </div>
    </>
  );
}

export default App;
