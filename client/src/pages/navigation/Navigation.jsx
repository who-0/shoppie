import { Outlet } from "react-router-dom";
import { Logo, NavLink } from "components";
import Nav from "./Navigation.styles";
import { useContext } from "react";
import { Context } from "contexts/AppContexts";
import { MenuIcon } from "components";

const Navs = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "shop", path: "/shop" },
  { id: 3, name: "login", path: "/auth" },
];
const Navigation = () => {
  const {
    changeColor,
    logo,
    home_active,
    shop_active,
    auth_active,
    menu_open,
  } = useContext(Context);
  return (
    <>
      <Nav>
        <Logo name={logo} className="brand_logo" />
        <div className={`btn-container ${menu_open ? "show" : null}`}>
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
            active={auth_active}
          />
        </div>
        <MenuIcon />
      </Nav>
      <Outlet />
    </>
  );
};
export default Navigation;
