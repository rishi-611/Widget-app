import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";

import "../css/Dropdown.css";
import "./DropdownResult";
import DropdownResult from "./DropdownResult";

const Dropdown = function ({
  options,
  selected,
  onSelectedChange,
  isOpen,
  toggleDropdown,
  setIsOpen,
}) {
  useEffect(() => {
    const closeDropdown = (e) => {
      const clicked = e.target.closest(".dropdown");
      // if target is not dropdown, or none of its parents are dropdown, then clicked will be null, hence clicked will be null for all element clicks outside dropdown
      if (!clicked) {
        setIsOpen(false);
      }
    };

    document.querySelector("body").addEventListener("click", closeDropdown);

    // clean up event lisetener on body when component unmounts
    return () =>
      document
        .querySelector("body")
        .removeEventListener("click", closeDropdown);
  }, []);

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
    <div className=" dropdown-wrapper">
      <div className="ui form">
        <div className="field">
          <label className="label">Select a color</label>
          <div
            className={`ui selection dropdown custom-dropdown ${
              isOpen ? "visible active" : ""
            }`}
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
      <DropdownResult color={selected} />
    </div>
  );
};

export default Dropdown;
