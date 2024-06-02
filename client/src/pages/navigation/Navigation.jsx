import { Outlet } from "react-router-dom";
import { Logo, NavLink, NavUser, MenuIcon } from "@components";
import { useContext } from "react";
import { Context } from "../../contexts/AppContexts";
import Nav from "./Navigation.styles";

import {
  HOME,
  SHOP,
  AUTH,
  PROFILE,
  ADMIN_DASHBOARD,
} from "../../contexts/actions";

const Navs = [
  { id: 1, name: "home", action: HOME },
  { id: 2, name: "shop", action: SHOP },
  { id: 3, name: "login", action: AUTH },
  { id: 4, name: "profile", action: PROFILE },
  { id: 5, name: "dashborad", action: ADMIN_DASHBOARD },
];

const Navigation = () => {
  const {
    user,
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
            action={Navs[0].action}
            changeColor={changeColor}
            active={home_active}
            path="/"
          />
          <NavLink
            name={Navs[1].name}
            action={Navs[1].action}
            changeColor={changeColor}
            active={shop_active}
            path="/shop"
          />
          {user ? (
            <NavUser user={user} navs={Navs} changeColor={changeColor} />
          ) : (
            <NavLink
              name={Navs[2].name}
              action={Navs[2].action}
              changeColor={changeColor}
              active={auth_active}
              path="/auth"
            />
          )}
        </div>
        <MenuIcon />
      </Nav>
      <Outlet />
    </>
  );
};
export default Navigation;
