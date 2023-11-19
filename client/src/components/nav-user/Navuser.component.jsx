import React, { useContext, useState } from 'react';
import { AiFillCaretDown,AiFillCaretUp  } from "react-icons/ai";
import {Wrapper,Menu} from './styles.components';
import { Usericon } from "assets";
import { NavLink } from 'components';
import { Context } from 'contexts/AppContexts';
import { useNavigate } from 'react-router-dom';



const NavUser = ({user,name,action,changeColor,active,path,profile}) => {
    const {logoutUser} = useContext(Context)
    const naviage = useNavigate();
    const [isOpen,setIsOpen] = useState(false);
    
   console.log(user);
   const openMenu = () => {
    setIsOpen(!isOpen);
   };

   const logOut = () => {
    logoutUser();
    naviage("/auth")
   };

   console.log(user);

    return (
       <>
         <Wrapper onClick={openMenu}>
        <Usericon className='nav-user-icon'/>
            <p>{user.name}</p>
            {isOpen ? <AiFillCaretUp className='nav-dropdown'/> : <AiFillCaretDown className='nav-dropdown' />}
        </Wrapper>
        {isOpen && (
            <Menu>
            <NavLink
                name={name}
                action={action}
                changeColor={changeColor}
                active={active}
                path={path}
                profile={profile}
                />
            {user.role === 'admin' && (<div className='nav-dashboard' onClick={_=>naviage("/admin")}>dashboard</div>)}
            <div className='nav-logout' onClick={logOut} >logout</div>
        </Menu>
        )}
       </>

        

    )
}

export default NavUser;