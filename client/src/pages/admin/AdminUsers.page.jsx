import { SearchUser, UserDisplay } from "components";
import { Users } from "./styles.admin";


const AdminUsers = () => {
  return (
  <Users>
    <SearchUser />
    <UserDisplay /> 
  </Users>);
};
export default AdminUsers;
