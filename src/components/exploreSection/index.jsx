import React from 'react'
import ExploreCard from './exploreCard'

function Explore({list,collectionName}) {
  return (
    <div className='max-width'>
       <div className='DelivaryCollection-heading'>{collectionName}</div>
       <div className='explore-grid grid grid-cols-3   flex-1 place-items-center  gap-x-9 gap-y-9'>
      {list.map(restorent=>{
        return <ExploreCard key={restorent?.info?.resId} restorent={restorent} />
      })}
       </div>
    </div>
  )
}

export default Explore
