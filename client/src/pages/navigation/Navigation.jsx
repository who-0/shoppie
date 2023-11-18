import { Outlet } from "react-router-dom";
import { Logo, NavLink,NavUser } from "components";
import { useContext } from "react";
import { Context } from "contexts/AppContexts";
import { MenuIcon } from "components";
import Nav from "./Navigation.styles";

import { HOME, SHOP, AUTH, PROFILE } from "contexts/actions";

const Navs = [
  { id: 1, name: "home", action: HOME },
  { id: 2, name: "shop", action: SHOP },
  { id: 3, name: "login", action: AUTH },
  { id: 4, name: "profile", action: PROFILE },
];

const Navigation = () => {
  const {
    user,
    changeColor,
    logo,
    home_active,
    shop_active,
    auth_active,
    profile_active,
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
              <NavUser user={user} />
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


/*
       <NavLink
              name={Navs[3].name}
              action={Navs[3].action}
              changeColor={changeColor}
              active={profile_active}
              path="/user/profile"
              profile="profile"
            />
*/