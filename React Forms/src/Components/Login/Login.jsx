import React, { useState } from "react";
import CommonForm from "../CommonForm/CommonForm";
import { loginFormElements } from "../../Config/loginControls";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginFormData, setLoginFormData] = useState(initialState);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log("User logged in successfully", loginFormData);
    setLoginFormData(initialState);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <CommonForm
        formControls={loginFormElements}
        formData={loginFormData}
        setFormData={setLoginFormData}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default Login;
