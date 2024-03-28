import React from "react";
import Slider from "react-slick";
import RightArrow from "../../rightArrow/index";
import LeftArrow from "../../leftArrow";
import Delivaryitem from "./Delivaryitem";
import TopBrands from "./topBrands";
const Delivaryitems = [
  {
    id: 1,
    title: "Pizza",
    foodImg:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 2,
    title: "Pizza",
    foodImg:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 3,
    title: "Pizza",
    foodImg:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 4,
    title: "Pizza",
    foodImg:
      "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
  {
    id: 5,
    title: "Pizza",
    foodImg:
      "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  },
  {
    id: 6,
    title: "Pizza",
    foodImg:
      "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 7,
    title: "Pizza",
    foodImg:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 8,
    title: "Pizza",
    foodImg:
      "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
];
function DelivaryCollection() {
  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  return (
    <div>
      <div className="bg-gray-50">
        <div className="max-width">
          <h1 className="DelivaryCollection-heading">
            Inspiration for your first order
          </h1>
          <Slider {...settings}>
            {Delivaryitems.map((item) => {
              return <Delivaryitem key={item.id} item={item} />;
            })}
          </Slider>
        </div>
      </div>

      <TopBrands />
    </div>
  );
}

export default DelivaryCollection;
