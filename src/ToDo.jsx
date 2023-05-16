import React, { useState } from "react";
import "./todo.css";

import ToDool from "./ToDool";
const ToDo = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    console.log("clicked");
    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return index !==id;
      })
  });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />

          <button onClick={listOfItems}>+</button>
          <ol>
          <br />
          
            {Items.map((itemss, index) => {
              return <ToDool key={index} id={index} text={itemss} onSelect={deleteItems} />;
            })}
            
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDo;
