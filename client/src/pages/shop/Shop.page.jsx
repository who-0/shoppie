import { useEffect } from "react";

const body = document.body;
const Shop = () => {
  useEffect(() => {
    body.style.background = "#A4D792";
  }, []);
  return <div>This is Shop Page.</div>;
};
export default Shop;
