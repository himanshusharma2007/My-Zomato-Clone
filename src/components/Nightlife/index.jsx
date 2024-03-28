import React from 'react'
import Collection from '../collection'
import Filter from '../filters';
import Explore from '../exploreSection';
import { nightLifeData } from '../data/nightLifeData';
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

  },
  {
    id:5,
    title:<h1>Rating 4.0+</h1>,

  },
  {
    id:6,
    title:<h1>Rating 4.0+</h1>,

  },
  {
    id:7,
    title:<h1>Rating 4.0+</h1>,

  }
];
const CollectionItem=[
  {
    id:1,
    title:"Best in Jaipur",
    places:"20 places",
    cover:"https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709811904.png?output-format=webp"
  },
 
  {
    id:2,
    title:"Best in Jaipur",
    places:"20 places",
    cover:"https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709812411.png?output-format=webp"
  },
  {
    id:3,
    title:"Best in Jaipur",
    places:"20 places",
    cover:"https://b.zmtcdn.com/data/collections/1322e8a1ff6ae914cd70bc8ec849d20d_1709814247.png?output-format=webp"
  },
  {
    id:5,
    title:"Best in Jaipur",
    places:"20 places",
    cover:"https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg?output-format=webp"
  },
  {
    id:6,
    title:"Best in Jaipur",
    places:"20 places",
    cover:"https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709811904.png?output-format=webp"
  },
 
  {
    id:7,
    title:"Best in Jaipur",
    places:"20 places",
    cover:"https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1709812411.png?output-format=webp"
  },
  {
    id:8,
    title:"Best in Jaipur",
    places:"20 places",
    cover:"https://b.zmtcdn.com/data/collections/1322e8a1ff6ae914cd70bc8ec849d20d_1709814247.png?output-format=webp"
  },
  {
    id:9,
    title:"Best in Jaipur",
    places:"20 places",
    cover:"https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg?output-format=webp"
  },
];
const restaurants=
nightLifeData;
function DiningOut() {
  return (
    <div>
      <Collection CollectionItem={CollectionItem} />
       {/* <h1>This is DiningOut</h1> */}
       <Filter FilterContaint={FilterContaint}/>
       <Explore list={restaurants} collectionName={"Nightlife Restaurants in Jaipur Promoted"} />
    </div>
  )
}

export default DiningOut
