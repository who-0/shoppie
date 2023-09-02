import { Outlet } from "react-router-dom";
import { Logo } from "../../components";

const Navigation = () => {
  return (
    <>
      <div>
        <Logo />
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
