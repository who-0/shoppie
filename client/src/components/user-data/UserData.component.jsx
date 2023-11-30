import React, { useState } from 'react'
import { FaPencil } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";
import User from './styles.component';

const UserData = () => {
    const defaultState = {
        name: 'paing',
        email:'paingsettkyaw12345@gmail.com',
        password:'kmd12345',
        phone:'9423008718',
        role:'admin',
        cTime:'2023-11-21',
        uTime:'2023-11-21'
    }
    const [isEdit,setIsEdit] = useState(false);
    const [userInfo,setUserInfo] = useState(defaultState);

    const handleChange = e => {
        setUserInfo({...userInfo,[e.target.name]:[e.target.value]})
    }


  return (
    <User $edit={+isEdit}>
        <div>
            {isEdit && (<label htmlFor='name'>name:</label>)}
            <input type='text' value={userInfo.name} name='name' id='name' disabled={isEdit ? false : true} onChange={handleChange}/>
        </div>
        
        <div>
            {isEdit && (<label htmlFor='mail'>email:</label>)}
            <input type='email' value={userInfo.email}  name='mail' id='mail' disabled={isEdit ? false : true} onChange={handleChange}/>
        </div>
        
        <div>
            {isEdit && (<label htmlFor='password'>password:</label>)}
            <input type='password' value={userInfo.password}  name='password' id='password' disabled={isEdit ? false : true} onChange={handleChange}/>
        </div>

       {isEdit && (
        <>
            <div>
                <label htmlFor='phone'>phone:</label>
                <input type='tel' value={userInfo.phone}  name='phone' id='phone' disabled={isEdit ? false : true} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor='role'>role:</label>
                <select defaultValue={userInfo.role}  name='role' id='role'onChange={handleChange}>
                    <option value='admin' >admin</option>
                    <option value='normal' >normal</option>
                </select>
            </div>
            <div>
                <label htmlFor='ctime'>create time:</label>
                <input type='date' value={userInfo.cTime}  name='ctime' id='time' disabled={isEdit ? false : true} onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor='utime'>update time:</label>
                <input type='date' value={userInfo.uTime}  name='utime' id='time' disabled={isEdit ? false : true} onChange={handleChange}/>
            </div>
            <div>
                <button type='button' onClick={_=>setIsEdit(false)}>cancel</button>
                <button type='button'>update</button>
            </div>
        </>
       )}

        {!isEdit && (
         <span>
         <FaPencil className='edit_icon icon' onClick={_=>setIsEdit(true)} />
        <BsFillTrash3Fill className='delete_icon icon' />
         </span>
        )}
        
  </User>
  )
}

export default UserData;