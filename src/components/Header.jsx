import React from 'react'
import { IoGrid } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header>
        <div className='logo-block'>
          <IoGrid />
          <SearchBar />
        </div>
        <div className='profile-block'>
          <div>
            <div><LuMail className='icons' /></div>
            <div><LuSettings className='icons' /></div>
            <div><IoNotificationsOutline className='icons' /></div>
          </div>
          <div>
            <img src="../../public/Capture.PNG" alt="profile" height='30px' width='30px' />
          </div>
        </div>
      </header>
  )
}

export default Header