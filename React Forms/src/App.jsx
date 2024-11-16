import "./App.css";
import CommonForm from "./Components/CommonForm/CommonForm";
import Form from "./Components/Form/Form";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/register";

function App() {
  return (
    <>
      <h1>React JS Forms</h1>
      {/* <Form/> */}
      <div style={{ display: "flex", gap: "30px" }}>
        <Login />
        <Register />
        <CommonForm />
      </div>
    </>
  );
}

export default App;
