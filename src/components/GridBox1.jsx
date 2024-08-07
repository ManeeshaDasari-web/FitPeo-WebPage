import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { MdShoppingBag } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";
import StatsCard from './StatsCard';

const GridBox1 = () => {
  return (
    <section>
              <StatsCard color="#28346B" icon={FaBasketShopping} title="Total Orders" value="75" change="3%" changeType="up" />
              <StatsCard color="#125447" icon={MdShoppingBag} title="Total Delivered" value="70" change="3%" changeType="down" />
              <StatsCard color="#5D3238" icon={MdShoppingBag} title="Total Cancelled" value="05" change="3%" changeType="up" />
              <StatsCard color="#5F2C4B" icon={BiSolidDollarCircle} title="Total Revenue" value="$12k" change="3%" changeType="down" />
            </section>
  )
}

export default GridBox1