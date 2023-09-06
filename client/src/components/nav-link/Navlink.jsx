import { useContext } from "react";
import Navlink from "./styles.component";
import {Context} from '../../contexts/AppContexts'
const NavLink = ({ name, path, changeColor }) => {
  const {color} = useContext(Context)
  return (
    <Navlink to={path} onClick={() => changeColor(path)} color={color}>
      {name}
    </Navlink>
  );
};
export default NavLink;
