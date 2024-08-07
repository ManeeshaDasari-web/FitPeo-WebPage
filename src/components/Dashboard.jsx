import React from 'react'
import GridBox1 from './GridBox1';
import GridBox2 from './GridBox2';
import GridBox3 from './GridBox3';
import GridBox4 from './GridBox4';
import GridBox5 from './GridBox5';
import GridBox6 from './GridBox6';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='title'><h2>Dashboard</h2></div>
      <div className='second'>
            <GridBox1/>
            <GridBox2/>
            <GridBox3/>
            <GridBox4/>
            <GridBox5/>
            <GridBox6/>
      </div>
    </section>
  )
}

export default Dashboard