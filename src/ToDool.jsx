import React from "react";

const ToDool = (props) => {


  return (
    <>
      <div className="cut">
        <i onClick={()=>{props.onSelect(props.id)}}className="fa-solid fa-trash" aria-hidden="true"></i>
        <li>{props.text}</li>
      </div>
    </>
  );  
};
export default ToDool;
