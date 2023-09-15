import colors from "colors";
import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
import { PROFILE } from "contexts/actions";

const body = document.body;
const Profile = () => {
  const { color, changeColor } = useContext(Context);
  useEffect(() => {
    if (color !== colors.login_color) {
      changeColor(PROFILE);
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);
  return <div>This is Profile Page.</div>;
};
export default Profile;
