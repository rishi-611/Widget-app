import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";

const Accordion = function ({ items }) {
  let [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (i) => {
    if (i === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(i);
    }
  };

  const list = items.map((item, i) => {
    const active = i === activeIndex ? "active" : "";

    //   react fragments are used, when we dont need the outermost div, which wraps the whole jsx, to show in the final html file.
    return (
      <React.Fragment key={`item-${i}`}>
        <div className={`title ${active}`} onClick={() => handleClick(i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div>
      <ul className="ui styled accordion">{list}</ul>
    </div>
  );
};

export default Accordion;
