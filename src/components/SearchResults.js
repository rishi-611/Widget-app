import React from "react";
import "semantic-ui-css/semantic.min.css";

const SearchResult = function ({ list }) {
  // console.log(list);
  const warningStyle = {
    margin: "0.2rem 0.75rem",
    border: "2px solid orange",
    display: "inline-block",
    padding: "0.5rem",
    borderRadius: "0.5rem",
  };
  if (list[0] === "no search yet") {
    return (
      <div>
        <p style={warningStyle}>Try typing something in the search bar</p>
      </div>
    );
  }

  if (list[0] === "request failed") {
    return (
      <div>
        <p style={warningStyle}>No results found. 😥</p>
      </div>
    );
  }
  const resultList = list.map((search) => {
    const regex = /(<([^>]+)>)/gi;
    const cleanSnippet = search.snippet.replaceAll(regex, "");
    return (
      <li key={search.pageid} className="item" style={{ padding: "0 0.8rem" }}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${search.pageid}`}
            className="ui green button"
            target="blank"
          >
            GO!
          </a>
        </div>
        <div className="content">
          <div className="header" style={{ margin: "0.4rem 0" }}>
            {search.title}
          </div>
          <div
            className="description"
            style={{ lineHeight: "1.3rem", wordSpacing: "0.2rem" }}
          >
            {cleanSnippet}
          </div>
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
