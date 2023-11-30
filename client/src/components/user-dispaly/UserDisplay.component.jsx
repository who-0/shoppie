import React, { useContext, useEffect } from 'react'
import Display from './styles.component';
import { Context } from 'contexts/AppContexts';
import { UserData } from 'components';

const UserDisplay = () => {
    const {usersData,getAllUsers} = useContext(Context);
    

    useEffect(()=>{
      getAllUsers();
    },[])

    console.log(usersData);
  return (
    <Display>
      <UserData />
    </Display>
  )
}

export default UserDisplay;