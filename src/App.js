import React, { useState } from "react";
import "./App.css";
import InputForm from "./InputForm/InputForm";
import List from "./List/List";

function App() {
  const [getChange, setChange] = useState("");
  const [getAdd, setAdd] = useState([]);
  const [getEdit, setEdit] = useState(false);
  const [getIndex, setIndex] = useState(-1);

  const onChangeHandler = (event) => {
    setChange(event.target.value);
  };
  const onAddHandler = () => {
    setAdd([...getAdd, getChange]);
  };
  const onDeleteHandler = (index) => {
    let list = getAdd;
    list.splice(index, 1);
    setAdd([...list]);
  };
  const onEditHandler = (index) => {
    setEdit(true);
    setChange(getAdd[index]);
    setIndex(index);
  };
  const onEsubmitHandler = () => {
    let list = getAdd;
    list[getIndex] = getChange;
    setAdd([...list]);
    setChange("");
    setEdit(false);
  };
  return (
    <div>
      <InputForm
        value={getChange}
        onEsubmitHandler={onEsubmitHandler}
        typeStatus={getEdit}
        onAddHandler={onAddHandler}
        onChangeHandler={onChangeHandler}
      />
      <List
        onEditHandler={onEditHandler}
        onDeleteHandler={onDeleteHandler}
        getChange={getAdd}
      />
    </div>
  );
}

export default App;
