import React from 'react';
import Wrapper from './styles.components';
import { Usericon } from "assets";
const NavUser = ({user}) => {
   console.log(user);
    return (
        <Wrapper>
        <Usericon className='nav-user-icon'/>
        {user.name}
        </Wrapper>
    )
}

export default NavUser;