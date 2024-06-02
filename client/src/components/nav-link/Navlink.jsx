import { useContext } from "react";
import Navlink from "./styles.component";
import { Context } from "../../contexts/AppContexts";
const NavLink = ({ name, action, changeColor, active, path, ...others }) => {
  const { icon, isOpen = true } = others;
  const { color } = useContext(Context);
  let title;

  if (isOpen) {
    title = name;
  } else {
    title = icon;
  }
  return (
    <Navlink
      to={path}
      onClick={() => changeColor(action)}
      color={color}
      isactive={+active}
      isopen={+isOpen} //+ sign is solve the error false non boolean value
      name={name}
    >
      {title}
    </Navlink>
  );
};
export default NavLink;
