import React from "react";
import "semantic-ui-css/semantic.min.css";

const SearchResult = function ({ list }) {
  // console.log(list);
  if (!list) {
    console.log("no results found");
    return (
      <div>
        <p>No Results found! 😢</p>
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
          <div className="header">{search.title}</div>
          <div className="description">{cleanSnippet}</div>
        </div>
      </li>
    );
  });

  console.log(resultList);

  return (
    <ul className="ui relaxed divided list" style={{ maxWidth: "60rem" }}>
      {resultList}
    </ul>
  );
};

export default SearchResult;
