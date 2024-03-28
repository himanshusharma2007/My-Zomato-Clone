import React from "react";
import Slider from "react-slick";
import RightArrow from "../rightArrow";
import LeftArrow from "../leftArrow";

function Collection({ CollectionItem }) {
  // Change prop name to CollectionItem
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  return (
    <div className="max-width flex flex-col flex-1 relative">
      <div className="text-4xl font-semibold mb-10 text-gray-900 font-serif tracking-wider">Collection</div>
      <div className="heading p-0">
        <p className="text-2xl  text-gray-700">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Jaipur, based on trends
        </p>
      </div>
      <Slider {...settings}>
        {CollectionItem.map(
          (
            item // Correct mapping function to use CollectionItem
          ) => (
            <div className="cover relative pt-4 pl-4 pr-4 " key={item.id}>
              <img className="rounded-md h-96" src={item.cover}  alt="" />
              <span className=" absolute bottom-14 text-white  left-10 text-3xl ">{item.title}</span>
              <span className=" absolute bottom-4 text-white font-semibold left-10 text-xl ">{item.places}
              <i className="fi fi-ss-play text-sm ml-2"></i>
              </span>
            </div>
          )
        )}
      </Slider>
    </div>
  );
}

export default Collection;
