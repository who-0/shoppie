import colors from "colors";
import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
import { PROFILE } from "contexts/actions";
import "./styles.css";
import { Usericon } from "assets";
import { Input, Alert } from "components";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const body = document.body;
const Profile = () => {
  const {
    color,
    changeColor,
    user,
    isEdited,
    editeProfile,
    cancelEditeProfile,
    logoutUser,
  } = useContext(Context);

  const defaultValue = {
    name: user.name,
    email: user.email,
    password: user.password || "",
  };

  const [formfield, setFormField] = useState(defaultValue);

  const { name, email, password } = formfield;

  useEffect(() => {
    if (color !== colors.login_color) {
      changeColor(PROFILE);
    } else {
      body.style.background = color;
    }
    // eslint-disable-next-line
  }, [color]);
  // const logoutUser = async () => {
  // await localStorage.removeItem("user");
  // Navigate("/");
  // };
  return (
    <div className="user">
      <div className="user_container">
        <div className="user_img">
          <Usericon width={180} height={180} />
        </div>
        <div className="user_info">
          {alert && <Alert />}
          <form>
            <input type="text" value={name} disabled={!isEdited} />
            <input type="email" value={email} disabled={!isEdited} />
            {isEdited && (
              <input type="password" value={password} disabled={!isEdited} />
            )}
            <div className="btn_container">
              {isEdited ? (
                <>
                  <button
                    type="button"
                    className="btn1 btn"
                    onClick={cancelEditeProfile}
                  >
                    cancel
                  </button>
                  <button type="button" className="btn2 btn">
                    submit
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn1 btn"
                    onClick={logoutUser}
                  >
                    logout
                  </button>
                  <button
                    type="button"
                    className="btn2 btn"
                    onClick={editeProfile}
                  >
                    update
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Profile;
