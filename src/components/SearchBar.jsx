import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";


const SearchBar = () => {
  return (
    <div className='search-bar'>
        <HiMagnifyingGlass />
        <input type="text" placeholder='Search'/>
    </div>
  )
}

export default SearchBar