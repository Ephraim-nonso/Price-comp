import React from "react";

function OnScreen(props) {
  return (
    <div className="card">
      <p>{props.details.level}</p>
      <h1>
        <span>$</span>
        {props.details.price}
      </h1>
      <p> {props.details.storage} </p>
      <p> {props.details.users} </p>
      <p> {props.details.share} </p>
      <button>{props.details.btn}</button>
    </div>
  );
}

export default OnScreen;
