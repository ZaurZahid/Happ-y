import React from "react";

import classes from "./Input.css";

const input = (props) => {
  let inputElement = null;
  let classOfInput = [classes.InputElement];
  let validationError = null;
  if (props.invalid && props.shouldValidation && props.touched) {
    classOfInput.push(classes.InValid);
    validationError = <p>Please enter a valid value!</p>;
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classOfInput.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.inputChangedHandler}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classOfInput.join(" ")}
          {...props.elementConfig}
          onChange={props.inputChangedHandler}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={classOfInput.join(" ")}
          value={props.value}
          onChange={props.inputChangedHandler}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayMethod}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.InputElement}
          value={props.value}
          onChange={props.inputChangedHandler}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
