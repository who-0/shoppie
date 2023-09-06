import { useContext, useEffect } from "react";
import LogoContainer from "./styles.component";
import { Context } from "../../contexts/AppContexts";
import { ReactComponent as Logo1 } from "../../assets/logo-1.svg";
import { ReactComponent as Logo2 } from "../../assets/logo-2.svg";
import { ReactComponent as Logo3 } from "../../assets/logo-3.svg";
let LOGOSVG = {
  logo_1: Logo1,
  logo_2: Logo2,
  logo_3: Logo3,
};
const Logo = ({ name }) => {
  const Logo = LOGOSVG[name];
  // let getLogo = localStorage.getItem("logo");
  // if (!getLogo) {
  //   localStorage.setItem("logo", logo);
  //   getLogo = localStorage.getItem("logo");
  // }

  // useEffect(() => {
  //   localStorage.setItem("logo", logo);
  // }, [logo]);
  // if (getLogo === "Logo1") {
  //   LOGOSVG = <Logo1 className="logo" />;
  // } else if (getLogo === "Logo2") {
  //   LOGOSVG = <Logo2 className="logo" />;
  // } else if (getLogo === "Logo3") {
  //   LOGOSVG = <Logo3 className="logo" />;
  // } else {
  //   LOGOSVG = <Logo1 className="logo" />;
  // }
  return (
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
  );
};
export default Logo;
