import { IoIosArrowForward } from "react-icons/io";
import React from 'react'

const GridItem = ({ color, icon: Icon, title }) => {
  return (
    <div>
    <div>
      <div className='icn' style={{ backgroundColor: color }}>
        <Icon />
      </div>
      <p>{title}</p>
    </div>
    <div>
      <div><IoIosArrowForward /></div>
    </div>
  </div>
  )
}

export default GridItem