/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Wrapper from "./styles.components";

const ProfileForm = ({
  formField,
  isEdited,
  changeHandler,
  cancelEditeProfile,
  changeUserInfo,
  logoutUser,
  editeProfile,
}) => {
  const { name, email, password } = formField;
  return (
    <Wrapper>
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
            <button type="button" className="btn2 btn" onClick={changeUserInfo}>
              submit
            </button>
          </>
        ) : (
          <>
            <button type="button" className="btn1 btn" onClick={logoutUser}>
              logout
            </button>
            <button type="button" className="btn2 btn" onClick={editeProfile}>
              update
            </button>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default ProfileForm;
