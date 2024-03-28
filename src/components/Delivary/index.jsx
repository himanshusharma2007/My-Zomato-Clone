import React from 'react'
import Filter from '../filters'
import DelivaryCollection from './DelivaryCollection';
import { restorents } from '../data';
import Explore from '../exploreSection';


const FilterContaint=[
  {
    id:1,
    title:<h1>Filter</h1>,
    icon:<i className="fi fi-rr-settings-sliders"></i>
  },
  {
    id:2,
    title:<h1>Rating 4.0+</h1>,

  },
  {
    id:3,
    title:<h1>Rating 4.0+</h1>,

  },
  {
    id:4,
    title:<h1>Rating 4.0+</h1>,

  }
];
const restaurants=restorents;
function Delivary() {
  return (
    <div className='w-full'> 
       <Filter FilterContaint={FilterContaint}/>
       <DelivaryCollection />
      <Explore list={restaurants} collectionName={"Delivery Restaurants in Jaipur"}/>
    </div>
  )
}

export default Delivary
