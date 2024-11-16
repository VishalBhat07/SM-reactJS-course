import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [namevalue, setNameValue] = useState("");
  const [emailvalue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleNameChange(event) {
    const { value } = event.target;
    // console.log(value);
    setNameValue(value);
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    // console.log(value)
    setEmailValue(value);
  }

  function handleOnChange(event) {
    console.log(event.target.name);
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(formData.name, formData.email);
  }

  console.log(formData);

  return (
    <>
      <div className="container">
        <h2>Submit this form :</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={formData.name}
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={handleOnChange}
          />
          <input
            value={formData.email}
            type="email"
            name="email"
            id="email"
            placeholder="Enter you email"
            onChange={handleOnChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
