import React from "react";
import "semantic-ui-css/semantic.min.css";

const SearchResult = function ({ list }) {
  const resultList = list.map((search) => {
    const regex = /(<([^>]+)>)/gi;
    const cleanSnippet = search.snippet.replaceAll(regex, "");
    return (
      <li key={search.pageid} className="item">
        <div className="content">
          <div className="header">{search.title}</div>
          <div className="description">{cleanSnippet}</div>
        </div>
      </li>
    );
  });
  return (
    <ul className="ui relaxed divided list" style={{ maxWidth: "60rem" }}>
      {resultList}
    </ul>
  );
};

export default SearchResult;
