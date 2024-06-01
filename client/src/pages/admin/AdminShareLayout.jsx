import { Outlet } from "react-router-dom";
import { AdminLayout } from "./styles.admin";
import { AdminMenu } from "@components";
import colors from "@colors";
import { Context } from "../../contexts/AppContexts";
import { useContext, useEffect } from "react";
import { ADMIN_DASHBOARD } from "../../contexts/actions";
const body = document.body;

const AdminShareLayout = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== colors.admin_color) {
      changeColor(ADMIN_DASHBOARD);
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);
  return (
    <AdminLayout>
      <AdminMenu changeColor={changeColor} />
      <Outlet />
    </AdminLayout>
  );
};
export default AdminShareLayout;
