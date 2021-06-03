import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Accordion from "./Accordion";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Navigation from "./Navigation";
import Route from "./Route";

const items = [
  {
    title: "What is React?",
    content: "React is a popular Javascript Library.",
  },
  {
    title: "Why use React?",
    content:
      "React makes it easy to develop complex web apps, with the help of reusable components, and a powerful render method",
  },
  {
    title: "How to get started with React?",
    content:
      "You can learn react on Udemy, Youtube, freecodeCamp, W3Schools, etc. There are hundreds of resources online",
  },
  {
    title: "React projects for beginners",
    content:
      "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
  },
  {
    title: "React Interview preparation",
    content:
      "The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.",
  },
];

const options = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
];

const App = function () {
  const [selected, setSelected] = useState("red");
  const [isOpen, setIsOpen] = useState(false);

  const onSelectedChange = (newValue) => {
    setSelected(newValue);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    minHeight: "30rem",
  };

  return (
    <div>
      <Navigation />

      <div className="ui  container" style={containerStyle}>
        <Route path="/">
          <Accordion items={items}></Accordion>
        </Route>
        <Route path="/search">
          <SearchBar />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            options={options}
            selected={selected}
            onSelectedChange={(newValue) => onSelectedChange(newValue)}
            isOpen={isOpen}
            toggleDropdown={(e) => {
              setIsOpen(!isOpen);
            }}
            setIsOpen={setIsOpen}
          />
        </Route>
      </div>
    </div>
  );
};

export default App;
