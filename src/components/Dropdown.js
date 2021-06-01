import React from "react";
import "semantic-ui-css/semantic.min.css";

const Dropdown = function ({
  options,
  selected,
  onSelectedChange,
  isOpen,
  toggleDropdown,
}) {
  const renderedOptions = options.map((option) => (
    <option
      className="item"
      key={option.value}
      value={option.value}
      onClick={(e) => onSelectedChange(e.target.value)}
    >
      {option.label}
    </option>
  ));

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          className={`ui selection dropdown ${isOpen ? "visible active" : ""}`}
          onClick={toggleDropdown}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected}</div>
          <div
            className={`menu ${isOpen ? "visible transition" : ""}`}
            onClick={toggleDropdown}
          >
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
