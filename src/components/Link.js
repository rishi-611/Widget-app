import React from "react";

const Link = function ({ href, label, className }) {
  const handleClick = (e) => {
    if (e.ctrlKey === true || e.metaKey === true) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, [], href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={(e) => handleClick(e, href)}>
      {label}
    </a>
  );
};
export default Link;
