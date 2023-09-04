import React, { useEffect } from "react";
const body = document.body;

const Home = () => {
  useEffect(() => {
    body.style.background = "#F7FDB6";
  }, []);

  return <div>This is a Home Page.</div>;
};
export default Home;
