import React, { useState } from 'react'
import moment from 'moment';

import { FaPencil } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";
import User from './styles.component';
import { useContext } from 'react';
import { Context } from 'contexts/AppContexts';

const UserData = ({user}) => {
    const {deleteUser} = useContext(Context);
    const {name,email,phone,createdAt,updatedAt,role,_id,password} = user;
    
    const cTime = moment(createdAt).format('YYYY-MM-DD');
    const uTime = moment(updatedAt).format('YYYY-MM-DD');
    const pwd = password.slice(1,10);

    const defaultState = {
        name,
        email,
        pwd,
        phone,
        role,
        cTime,
        uTime,
    }

    const [isEdit,setIsEdit] = useState(false);

    const [userInfo,setUserInfo] = useState(defaultState);

    const handleChange = e => {
        setUserInfo({...userInfo,[e.target.name]:[e.target.value]})
    }

    const deleteBtn = async () => {
        await deleteUser(_id);
    }

    const cancelBtn = () => {
        setIsEdit(false);
        setUserInfo(defaultState)
    }
  return (
    <User $edit={+isEdit}>
        <div>
            {isEdit && (<label htmlFor={userInfo.name}>name:</label>)}
            <input type='text' value={userInfo.name} name='name' id={userInfo.name} disabled={isEdit ? false : true} onChange={handleChange}/>
        </div>
        
        <div>
            {isEdit && (<label htmlFor={userInfo.email} >email:</label>)}
            <input type='email' value={userInfo.email}  name='email' id={userInfo.email}  disabled={isEdit ? false : true} onChange={handleChange}/>
        </div>
        
        <div>
            {isEdit && (<label htmlFor={userInfo.pwd}>password:</label>)}
            <input type='password' value={userInfo.pwd}  name='pwd' id={userInfo.pwd} disabled={isEdit ? false : true} onChange={handleChange}/>
        </div>

       {isEdit && (
        <>
            <div>
                <label htmlFor='phone'>phone:</label>
                <input type='tel' value={userInfo.phone}  name='phone' id='phone' disabled={isEdit ? false : true} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='role'>role:</label>
                <select defaultValue={userInfo.role}  name='role' id='role' onChange={handleChange}  >
                    <option value='admin' >admin</option>
                    <option value='normal' >normal</option>
                </select>
            </div>
            <div>
                <label htmlFor='ctime'>create time:</label>
                <input type='date' value={userInfo.cTime}  name='cTime' id='cTime' disabled={isEdit ? false : true} onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor='utime'>update time:</label>
                <input type='date' value={userInfo.uTime}  name='uTime' id='utime' disabled={isEdit ? false : true} onChange={handleChange}/>
            </div>
            <div>
                <button type='button' onClick={cancelBtn}>cancel</button>
                <button type='button'>update</button>
            </div>
        </>
       )}

        {!isEdit && (
         <span>
         <FaPencil className='icon' onClick={_=>setIsEdit(true)} />
        <BsFillTrash3Fill className='icon' onClick={deleteBtn}/>
         </span>
        )}
        
  </User>
  )
}

export default UserData;