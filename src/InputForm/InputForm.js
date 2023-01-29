import React from "react";
import "./InputForm.css";

function InputForm(props) {
  return (
    <div className="input-form">
      <input
        value={props.value}
        type="text"
        className="input-box"
        onChange={props.onChangeHandler}
      />
      <br />
      {props.typeStatus ? (
        <button onClick={props.onEsubmitHandler}>Edit</button>
      ) : (
        <button onClick={props.onAddHandler}>Add</button>
      )}
    </div>
  );
}

export default InputForm;
