import React from "react";

export default function DropdownFilter(props) {
  const options = props.options;
  const optionItems = options.map((data) => (
    <option key={data} value={data}>
      {data}
    </option>
  ));

  return (
    <div className="custom-select">
      <label htmlFor={props.id}>{props.label}: </label>
      <select
        disabled={props.disabled}
        aria-label={props.aria}
        className="spec-input"
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      >
        <option disabled value="">
          {" "}
          -- {props.label} --{" "}
        </option>
        {optionItems}
      </select>
    </div>
  );
}
