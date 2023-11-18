import React, { useState } from 'react';
import { AiFillCaretDown,AiFillCaretUp  } from "react-icons/ai";
import {Wrapper,Menu} from './styles.components';
import { Usericon } from "assets";
import { NavLink } from 'components';
const NavUser = ({user,name,action,changeColor,active,path,profile}) => {
    const [isOpen,setIsOpen] = useState(false)
   console.log(user);
   const openMenu = () => {
    setIsOpen(!isOpen);
   }
    return (
       <>
         <Wrapper onClick={openMenu}>
        <Usericon className='nav-user-icon'/>
            <p>{user.name}</p>
            {isOpen ? <AiFillCaretUp className='nav-dropdown'/> : <AiFillCaretDown className='nav-dropdown' />}
        
        </Wrapper>
        <Menu>
            <NavLink
                name={name}
                action={action}
                changeColor={changeColor}
                active={true}
                path={path}
                profile={profile}
                />
            <div>logout</div>
        </Menu>
       </>

        

    )
}

export default NavUser;