import { useContext } from "react";
import Navlink from "./styles.component";
import { Context } from "../../contexts/AppContexts";
const NavLink = ({ name, path, changeColor, active }) => {
  const { color } = useContext(Context);
  return (
    <Navlink
      to={path}
      onClick={() => changeColor(path)}
      color={color}
      isactive={+active} //+ sign is solve the error false non boolean value
    >
      {name}
    </Navlink>
  );
};
export default NavLink;
