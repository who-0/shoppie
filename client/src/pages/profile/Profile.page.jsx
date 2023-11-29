import colors from "colors";
import { useContext, useEffect } from "react";
import { Context } from "contexts/AppContexts";
import { PROFILE } from "contexts/actions";
import "./styles.page.jsx";
import { Alert, ProfileForm, ProfileIcon } from "components";
import { useState } from "react";
import Wrapper from "./styles.page.jsx";

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
    <Wrapper>
      <div className="user_container">
        <ProfileIcon />
        <div className="user_info">
          {alert && <Alert />}
          <ProfileForm
            formField={formfield}
            isEdited={isEdited}
            changeHandler={changeHandler}
            cancelEditeProfile={cancelEditeProfile}
            changeUserInfo={changeUserInfo}
            logoutUser={logoutUser}
            editeProfile={editeProfile}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Profile;
