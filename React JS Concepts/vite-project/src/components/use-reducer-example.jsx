import React, { useReducer } from "react";
import "./styles.css";

const initialState = {
  showTextFlag: false,
  changeTextFlag: false,
};

const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT = "CHANGE_TEXT";

function reducer(state, action) {
  switch (action.type) {
    case HIDE_TEXT:
      return {
        ...state,
        showTextFlag: false,
      };
    case SHOW_TEXT:
      return {
        ...state,
        showTextFlag: true,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        changeTextFlag: !state.changeTextFlag,
      };

    default:
      return state;
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      {state.showTextFlag === true ? (
        <h3 style={{ color: state.changeTextFlag === true ? "blue" : "red" }}>
          Use reducer example
        </h3>
      ) : null}

      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show text</button>
      <button onClick={() => dispatch({ type: CHANGE_TEXT })}>
        Toggle text
      </button>
    </div>
  );
};

export default UseReducerExample;
