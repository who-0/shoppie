import React, { useContext, useEffect } from "react";
import Display from "./styles.component";
import { Context } from "contexts/AppContexts";
import { UserData } from "components";

const UserDisplay = () => {
  const { usersData, getAllUsers } = useContext(Context);

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <Display>
      {usersData.map((user) => (
        <UserData key={user._id} user={user} />
      ))}
    </Display>
  );
};

export default UserDisplay;
