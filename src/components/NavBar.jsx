import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsFileBarGraph } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import { AiOutlineWallet } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
const NavBar = () => {
  return (
    <nav>
          <div>
            <AiFillHome />
            <BsFileBarGraph />
            <RiTodoLine />
            <AiOutlineWallet />
            <MdOutlineShoppingBag />
          </div>
          <IoMdLogOut />
        </nav>
  )
}

export default NavBar