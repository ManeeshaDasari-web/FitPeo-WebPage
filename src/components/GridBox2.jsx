import React, { useState } from 'react'
import ProgressCircle from './ProgressCircle';
import NetProfit from './NetProfit';

const GridBox2 = () => {
  const [percentage, setPercentage] = useState(70);
  return (
    <section className='grid2'>
    <NetProfit/>
    <ProgressCircle percentage={75} />
  </section>
  )
}

export default GridBox2