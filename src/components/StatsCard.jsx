import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

const StatsCard = ({ color, icon: Icon, title, value, change, changeType }) => {
  return (
   
        <div className='stats'>
          <div>
            <div style={{ backgroundColor: color }}><Icon /></div>
          </div>
          <div>
            <p>{title}</p>
            <h3>{value}</h3>
            <div className='last'>
              {changeType === "up" ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
              <p>{change}</p>
            </div>
          </div>
        </div>
      
  )
}

export default StatsCard