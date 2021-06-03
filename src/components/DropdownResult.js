import React from "react";
import "../css/Dropdown.css";

const DropdownResult = function ({ color }) {
  const textStyle = {
    color: `${color}`,
  };
  const divStyle = {
    maxWidth: "500px",
    minHeight: "200px",
    width: "95%",
    padding: "0.75rem",
    textAlign: "center",
    border: "2px solid #222",
    borderRadius: "1rem 0",
    display: "grid",
    justifyConent: "center",
    alignContent: "center",
    margin: "1rem auto",
    boxShadow: "7px 7px 8px #ccc , -7px -7px 8px #ccc",
  };
  return (
    <div style={divStyle}>
      <p style={textStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
        voluptatibus doloribus sunt quas totam. Esse odit ipsum, velit itaque
        magnam, quisquam iste quos corrupti est labore nobis sequi
        exercitationem. Suscipit blanditiis doloremque, reprehenderit, quas
        dolore molestias voluptatem perspiciatis deleniti excepturi, hic tenetur
        aliquam ut! Consectetur quas quis temporibus ipsa impedit?
      </p>
    </div>
  );
};

export default DropdownResult;
