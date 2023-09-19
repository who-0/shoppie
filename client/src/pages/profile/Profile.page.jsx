import colors from "colors";
import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
import { PROFILE } from "contexts/actions";
import "./styles.css";
import { Usericon } from "assets";
import { Input } from "components";
const body = document.body;
const Profile = () => {
  const { color, changeColor, user } = useContext(Context);

  useEffect(() => {
    if (color !== colors.login_color) {
      changeColor(PROFILE);
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);
  return (
    <div className="user_container">
      <div className="user_img">
        <Usericon width={180} height={180}  />
      </div>
      <div className="user_info">
        <form>
          <input type="text" placeholder={user.name} disabled={false} />
          <input type="email" placeholder={user.email} disabled={false} />
          <input type="password" placeholder={user.password} disabled={false} />
        </form>
        
      </div>
    </div>
  );
};
export default Profile;
