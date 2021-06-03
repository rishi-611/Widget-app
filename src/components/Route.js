import { useState, useEffect } from "react";

const Route = function ({ path, children }) {
  const [location, setLocation] = useState(window.location.pathname);
  // console.log(location);

  useEffect(() => {
    const onLocationChange = () => {
      // console.log("about to cause rerender to" + location);
      setLocation(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);

    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;
