import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Axios from "axios";
import axios from "axios";

const SearchBar = function () {
  const [term, setTerm] = useState("");
  const wrapperStyle = {
    background: "linear-gradient(to right, #111, #444)",
    display: "inline-block",
    padding: "0.5rem",
    borderRadius: "1rem",
    margin: "0.4rem",
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  useEffect(
    function (term) {
      Axios.get(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${term}`
      );
    },
    [term]
  );

  return (
    <div className="ui search " style={wrapperStyle}>
      <div className="ui icon input">
        <input
          className="prompt"
          type="text"
          value={term}
          placeholder="Search something..."
          onChange={(e) => handleChange(e)}
        />
        <button
          type="submit"
          style={{ borderRadius: "50%", marginLeft: "0.5rem" }}
        >
          <i className="search icon"></i>
        </button>
      </div>
      <div className="results"></div>
    </div>
  );
};

export default SearchBar;
