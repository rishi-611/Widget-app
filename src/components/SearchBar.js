import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";

import axios from "axios";
import SearchResult from "./SearchResults";

const SearchBar = function () {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
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
    function () {
      const getData = async function (term) {
        const { data } = await axios.get(
          `https://en.wikipedia.org/w/api.php?`,
          {
            params: {
              action: "query",
              list: "search",
              origin: "*",
              format: "json",
              srsearch: term,
            },
          }
        );
        const searchList = data.query.search;
        setResult(searchList);
      };
      if (term) getData(term);
    },
    [term]
  );

  return (
    <div>
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
      <SearchResult list={result} />
    </div>
  );
};

export default SearchBar;
