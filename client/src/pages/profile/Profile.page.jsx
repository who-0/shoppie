import colors from "colors";
import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
import { PROFILE } from "contexts/actions";
import "./styles.css";
import {  Alert, ProfileIcon } from "components";
import { useState } from "react";


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
    updateUser,
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

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formfield, [name]: value });
  };

  const changeUserInfo = () => {
    updateUser(formfield);
  };

  return (
    <div className="user">
      <div className="user_container">
        <ProfileIcon />
        <div className="user_info">
          {alert && <Alert />}
          <form>
            <input
              type="text"
              value={name}
              name="name"
              disabled={!isEdited}
              onChange={changeHandler}
            />
            <input
              type="email"
              value={email}
              name="email"
              disabled={!isEdited}
              onChange={changeHandler}
            />
            {isEdited && (
              <input
                type="password"
                value={password}
                name="password"
                disabled={!isEdited}
                onChange={changeHandler}
                placeholder="New Password"
              />
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
                  <button
                    type="button"
                    className="btn2 btn"
                    onClick={changeUserInfo}
                  >
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
