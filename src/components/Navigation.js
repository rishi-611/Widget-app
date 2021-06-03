import React from "react";
import "semantic-ui-css/semantic.min.css";

import Link from "./Link";

const Navigation = function () {
  return (
    <div className="ui inverted  menu navbar">
      <Link className="item nav-item nav-item-1" label="Accordion" href="/" />
      <Link
        className="item nav-item nav-item-2"
        label="Search"
        href="/search"
      />
      <Link
        className="item nav-item nav-item-3"
        label="Dropdown"
        href="/dropdown"
      />
    </div>
  );
};

export default Navigation;
