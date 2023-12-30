import { SearchUser, UserDisplay } from "components";
import { Users } from "./styles.admin";
import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
import colors from "colors";
import { ADMIN_USERS } from "contexts/actions";
const body = document.body;

const AdminUsers = () => {
  const { color, changeColor } = useContext(Context);

  useEffect(() => {
    if (color !== colors.home_color) {
      changeColor(ADMIN_USERS);
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);
  return (
    <Users>
      <SearchUser />
      <UserDisplay />
    </Users>
  );
};
export default AdminUsers;
