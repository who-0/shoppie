import { Outlet, useNavigate } from "react-router-dom";
import { Logo, Button } from "../../components";
import Nav from "./Navigation.styles";

const Navigation = () => {
  return (
    <>
      <Nav>
        <Logo />
        <div className="btn-container">
          <Button className="btn" title="home" type="NavBtn" action="/" />
          <Button className="btn" title="shop" type="shop" action="/shop" />
          <Button className="btn" title="login" type="login" action="/login" />
        </div>
      </Nav>
      <Outlet />
    </>
  );
};
export default Navigation;
