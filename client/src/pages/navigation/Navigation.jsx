import { Outlet } from "react-router-dom";
import { Logo, NavLink } from "components";
import { useContext } from "react";
import { Context } from "contexts/AppContexts";
import { MenuIcon } from "components";
import Nav from "./Navigation.styles";

import { HOME, SHOP, AUTH } from "contexts/actions";

const Navs = [
  { id: 1, name: "home", action: HOME },
  { id: 2, name: "shop", action: SHOP },
  { id: 3, name: "login", action: AUTH },
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
            action={Navs[0].path}
            changeColor={changeColor}
            active={home_active}
            path="/"
          />
          <NavLink
            name={Navs[1].name}
            action={Navs[1].path}
            changeColor={changeColor}
            active={shop_active}
            path="/shop"
          />
          <NavLink
            name={Navs[2].name}
            action={Navs[2].path}
            changeColor={changeColor}
            active={auth_active}
            path="/auth"
          />
        </div>
        <MenuIcon />
      </Nav>
      <Outlet />
    </>
  );
};
export default Navigation;
