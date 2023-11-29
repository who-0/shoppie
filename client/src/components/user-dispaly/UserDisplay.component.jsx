import React, { useContext } from 'react'
import Display from './styles.component';
import { Context } from 'contexts/AppContexts';

const UserDisplay = () => {
    const {usersData} = useContext(Context)
    console.log(usersData);
  return (
    <Display>
        serdatau
    </Display>
  )
}

export default UserDisplay;