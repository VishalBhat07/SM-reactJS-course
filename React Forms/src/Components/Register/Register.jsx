import React, { useState } from "react";
import CommonForm from "../CommonForm/CommonForm";
import { registerFormElements } from "../../Config/registerControls";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [registerFormData, setRegisterFormData] = useState(initialState);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log("User registered in successfully", registerFormData);
    setRegisterFormData(initialState);
  }

  return (
    <div>
      <h1>Register Page</h1>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default Register;
