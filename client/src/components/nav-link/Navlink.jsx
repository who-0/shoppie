import { useContext } from "react";
import Navlink from "./styles.component";
import { Context } from "contexts/AppContexts";
const NavLink = ({ name, action, changeColor, active, path, ...others }) => {
  // const { profile } = others;
  const { color } = useContext(Context);
  return (
    <Navlink
      to={path}
      onClick={() => changeColor(action)}
      color={color}
      isactive={+active} //+ sign is solve the error false non boolean value
      name={name}
    >
      {name}
    </Navlink>
  );
};
export default NavLink;
