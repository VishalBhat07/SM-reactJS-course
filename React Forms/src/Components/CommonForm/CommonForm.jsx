import React from "react";
import CommonInput from "../CommonInput/CommonInput";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formControls = [],
  onHandleSubmit,
  formData,
  setFormData,
  buttonText,
}) => {
  function renderFormElement(singleFormElement) {
    let content = null;

    switch (singleFormElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={singleFormElement.label}
            name={singleFormElement.name}
            id={singleFormElement.id}
            placeholder={singleFormElement.placeholder}
            value={formData[singleFormElement.name]}
            type={singleFormElement.type}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );

        break;

      default:
        break;
    }

    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElement) =>
            renderFormElement(singleFormElement)
          )
        : null}

      <div>
        <button style={{ margin: "10px", padding: "10px" }} type="submit">
          {buttonText || "Submit"}
        </button>
      </div>
    </form>
  );
};

export default CommonForm;
