import React from 'react'
import { CiStar } from "react-icons/ci";

const GridBox6 = () => {
  return (
    <section className='grid6'>
      <h2>Customer's Feedback</h2>
      <div className='feedb'>
          <div>
          <img src="../../public/Capture.PNG" alt="" />
          <h4>Jenny Wilson</h4>
          </div>
          <div style={{fontSize:'25px'}}>
          <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
          </div>
          <div style={{fontSize:'13px',lineHeight:'18px'}}>
          <p>The Food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.</p>
          </div>
      </div>
    </section>
  )
}

export default GridBox6