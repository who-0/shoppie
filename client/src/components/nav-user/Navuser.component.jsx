import React, { useContext } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Wrapper, Menu } from "./styles.components";
import { Usericon } from "assets";
import { NavLink } from "components";
import { Context } from "contexts/AppContexts";
import { useNavigate } from "react-router-dom";

const NavUser = ({ user, changeColor, navs }) => {
  const {
    logoutUser,
    sub_menu_open,
    subMenuOpen,
    profile_active,
    admin_active,
  } = useContext(Context);
  const naviage = useNavigate();

  const logOut = () => {
    logoutUser();
    naviage("/auth");
    subMenuOpen();
  };

  return (
    <>
      <Wrapper onClick={subMenuOpen}>
        <Usericon className="nav-user-icon" />
        <p>{user.name}</p>
        {sub_menu_open ? (
          <AiFillCaretUp className="nav-dropdown" />
        ) : (
          <AiFillCaretDown className="nav-dropdown" />
        )}
      </Wrapper>
      {sub_menu_open && (
        <Menu>
          <NavLink
            name={navs[3].name}
            action={navs[3].action}
            changeColor={changeColor}
            active={profile_active}
            path="/user/profile"
            profile="profile"
          />
          {user.role === "admin" && (
            <NavLink
              name={navs[4].name}
              action={navs[4].action}
              changeColor={changeColor}
              active={admin_active}
              path="/admin"
            />
          )}
          <div className="nav-logout" onClick={logOut}>
            logout
          </div>
        </Menu>
      )}
    </>
  );
};

export default NavUser;
