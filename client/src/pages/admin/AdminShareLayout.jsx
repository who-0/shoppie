import { Outlet } from "react-router-dom";
import { AdminLayout,AdminMenu } from "./styles.admin";
import { NavLink } from "components";


const AdminShareLayout = () => {
  return (
    <AdminLayout>
      <AdminMenu>
        <NavLink />
      </AdminMenu>
      <Outlet />
    </AdminLayout>
  );
};
export default AdminShareLayout;
