import { ReactComponent as Shoppie } from "../../assets/logo-1.svg";
import LogoContainer from "./styles.component";

const Logo = () => {
  return (
    <LogoContainer to="/">
      <Shoppie className="logo" />
    </LogoContainer>
  );
};
export default Logo;
