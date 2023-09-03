import { Outlet, useNavigate } from "react-router-dom";
import { Logo, Button } from "../../components";
import Nav from "./Navigation.styles";

const Navigation = () => {
  return (
    <>
      <Nav>
        <Logo />
        <div className="btn-container">
          <Button className="btn" title="home" type="nav" action="/" />
          <Button className="btn" title="shop" type="nav" action="/shop" />
          <Button className="btn" title="login" type="nav" action="/login" />
        </div>
      </Nav>
      <Outlet />
    </>
  );
};
export default Navigation;
