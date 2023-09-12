import LogoContainer from "./styles.component";
import { Logo1, Logo2, Logo3 } from "assets";

let LOGOSVG = {
  logo_1: Logo1,
  logo_2: Logo2,
  logo_3: Logo3,
};

const Logo = ({ name }) => {
  const Logo = LOGOSVG[name];
  return (
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
  );
};
export default Logo;
