import { Outlet } from "react-router-dom";
import { Logo, NavLink } from "../../components";
import Nav from "./Navigation.styles";
import { useContext } from "react";
import { Context } from "../../contexts/AppContexts";
const Navs = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "shop", path: "/shop" },
  { id: 3, name: "login", path: "/login" },
];
const Navigation = () => {
  const { changeColor, logo, home_active, shop_active, login_active } =
    useContext(Context);
  return (
    <>
      <Nav>
        <Logo name={logo} />
        <div className="btn-container">
          <NavLink
            name={Navs[0].name}
            path={Navs[0].path}
            changeColor={changeColor}
            active={home_active}
          />
          <NavLink
            name={Navs[1].name}
            path={Navs[1].path}
            changeColor={changeColor}
            active={shop_active}
          />
          <NavLink
            name={Navs[2].name}
            path={Navs[2].path}
            changeColor={changeColor}
            active={login_active}
          />
        </div>
      </Nav>
      <Outlet />
    </>
  );
};
export default Navigation;
