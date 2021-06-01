import React, { useEffect, useState } from "react";
// import Accordion from "./Accordion";
// import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";

// const items = [
//   {
//     title: "What is React?",
//     content: "React is a popular Javascript Library.",
//   },
//   {
//     title: "Why use React?",
//     content:
//       "React makes it easy to develop complex web apps, with the help of reusable components, and a powerful render method",
//   },
//   {
//     title: "How to get started with React?",
//     content:
//       "You can learn react on Udemy, Youtube, freecodeCamp, W3Schools, etc. There are hundreds of resources online",
//   },
// ];

const options = [
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
  { label: "Green", value: "green" },
];

const App = function () {
  const [selected, setSelected] = useState("red");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.classList.contains("dropdown")) {
        setIsOpen(false);
      }
    };

    document.querySelector("body").addEventListener("click", closeDropdown);
  }, []);

  const onSelectedChange = (newValue) => {
    setSelected(newValue);
  };

  return (
    <div>
      {/*<Accordion items={items} >*/}
      {/*<SearchBar />*/}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={(newValue) => onSelectedChange(newValue)}
        isOpen={isOpen}
        toggleDropdown={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default App;
