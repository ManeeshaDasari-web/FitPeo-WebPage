import React from 'react'
import { TbFocus2 } from "react-icons/tb";
import { CiBurger } from "react-icons/ci";
import { BiDish } from "react-icons/bi";
import GridItem from './GridItem';
const GridBox4 = () => {
  return (
    <section className='grid4'>
    <GridItem color="#5E3238" icon={TbFocus2} title="Goals" />
    <GridItem color="#293268" icon={CiBurger} title="Popular Dishes" />
    <GridItem color="#204C61" icon={BiDish} title="Menus" />
  </section>
  )
}

export default GridBox4