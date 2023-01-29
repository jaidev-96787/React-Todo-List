import React from "react";
import "./List.css";

const List = (props) => {
  return (
    <div>
      <ul>
        {props.getChange.map((obj, index) => {
          return (
            <div key={index} className="list-btn">
              <li>{obj}</li>
              <button
                onClick={() => props.onEditHandler(index)}
                className="list-btn"
              >
                Edit
              </button>
              <button onClick={() => props.onDeleteHandler(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default List;
