import React from "react";

export default function DateInput(props) {
  return (
    <div className="date-input">
      <label htmlFor={props.id}>{props.label}: </label>
      <input
        type="date"
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
