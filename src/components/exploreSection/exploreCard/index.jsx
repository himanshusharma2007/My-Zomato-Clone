import React from "react";

function ExploreCard({ restorent }) {
  const name = restorent?.info?.name;
  const restoImg = restorent?.info?.image?.url;
  const delivaryTime = restorent?.order?.deliveryTime;
  const rating = restorent?.info?.rating?.rating_text;
  const price = restorent?.info?.cft?.text;
  const offers = restorent?.bulkOffers ?? [];
  const cuisines = restorent?.info?.cuisine?.map((item) => item.name)?.slice(0, 1);
  const discount = restorent?.bulkOffers[0]?.text;
  const gold=restorent?.gold?.offerValue;
  const distance=restorent?.distance;
  const locality=restorent?.info?.locality?.name;
  const timing=restorent?.info?.timing?.text;
  return (
    <div className="main relative cursor-pointer w-full flex flex-1 flex-col justify-center items-start  max-h-[500px] hover:shadow-2xl bg-white   p-2 pc-10  border-2 border-white hover:border-gray-300 rounded-2xl">
      <div className="cover relative w-full h-[280px]">
        <img src={restoImg} alt="" className="w-full h-full rounded-2xl" />
        <div className="discount">
          {discount && (
            <div className="bg-blue-500 absolute bottom-3 text-white p-1 text-xl">
              {discount}
            </div>
          )}
            {gold && (
            <div className="bg-black absolute bottom-3 text-yellow-600 p-1 text-xl">
              🌟Flat {gold}
            </div>
          )}
        </div>
      </div>
      <div className="bottom mt-3 flex flex-1 lg:flex-row flex-col justify-between items-start w-full">
        <div className="left w-2/3">
          <div className="name text-2xl text-gray-800">{name}
          {cuisines?.length > 0 && (
            <div className="cusines flex text-xl text-gray-700">
              {cuisines.map((cuisine, index) => {
                return <span key={index}>{cuisine}</span>;
              })}
            </div>
          )}
           {locality && <div className="time text-xl text-gray-700">{locality}</div>}
           {timing && <div className="time text-xl text-red-500">{timing}</div>}
           </div>
        </div>
        <div className="right flex flex-col justify-end text-right relative">
          <div className="relative h-7">
            <div className="rating absolute bg-green-600 w-14 flex justify-center space-x-1 text-white text-lg font-semibold rounded-md right-0">
              <div>{rating}</div>
              <i className="fi fi-ss-star text-white"></i>
            </div>
          </div>
          {price && <div className="price text-2xl text-gray-800">{price}</div>}
          {delivaryTime && <div className="time text-xl text-gray-700">{delivaryTime}</div>}
          {distance && <div className="time text-xl text-gray-700">{distance}</div>}
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
