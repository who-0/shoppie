import { useContext } from "react";
import { VscListSelection, VscChromeClose } from "react-icons/vsc";
import { Context } from "contexts/AppContexts";
import Menuicon from "./styles.component";

const MenuIcon = () => {
  const { menuOpen, menu_open } = useContext(Context);
  return (
    <Menuicon onClick={menuOpen}>
      {menu_open ? (
        <VscChromeClose className="menu_icon" />
      ) : (
        <VscListSelection className="menu_icon" />
      )}
    </Menuicon>
  );
};
export default MenuIcon;
