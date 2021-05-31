import React from "react";
// import Accordion from "./Accordion";
import SearchBar from "./SearchBar";

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
];

const App = function () {
  return (
    <div>
      {/*<Accordion items={items} >*/}
      <SearchBar />
    </div>
  );
};

export default App;
