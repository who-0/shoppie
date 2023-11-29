import React, { useContext, useState } from 'react'
import { TfiSearch } from "react-icons/tfi";
import Search from './styles.component';
import { Context } from 'contexts/AppContexts';

const SearchUser = () => {
    const [search,setSearch] = useState('email');
    const [value,setValue] = useState('');
    const {getSingleUserData} = useContext(Context);
    const selectValue = (e) => setSearch(e.target.value);
    const checkUser = (e) => getSingleUserData(search,value);
   const changeHandler = e => setValue(e.target.value)
  return (
    <Search>
        <select defaultValue={search} onChange={selectValue}>
            <option value='email'>email</option>
            <option value='name'>name</option>
        </select>
        <input name='search' id='search' value={value} placeholder={`search user with ${search}`} onChange={changeHandler} autoComplete='off' />
        <TfiSearch className='search_icon' onClick={checkUser}/>
    </Search>
  )
}

export default SearchUser;