import { useContext, useEffect } from "react";
import LogoContainer from "./styles.component";
import { Context } from "../../contexts/AppContexts";
import { ReactComponent as Logo1 } from "../../assets/logo-1.svg";
import { ReactComponent as Logo2 } from "../../assets/logo-2.svg";
import { ReactComponent as Logo3 } from "../../assets/logo-3.svg";
let LOGOSVG;
let getLogo;
const Logo = () => {
  const { logo } = useContext(Context);
  console.log("start", logo);
  useEffect(() => {
    localStorage.setItem("logo", logo);
  }, [logo]);
  getLogo = localStorage.getItem("logo");
  if (getLogo === "Logo1") {
    LOGOSVG = <Logo1 className="logo" />;
  } else if (getLogo === "Logo2") {
    LOGOSVG = <Logo2 className="logo" />;
  } else if (getLogo === "Logo3") {
    LOGOSVG = <Logo3 className="logo" />;
  } else {
    LOGOSVG = <Logo1 className="logo" />;
  }
  return <LogoContainer to="/">{LOGOSVG}</LogoContainer>;
};
export default Logo;
