import React from "react";
import Slider from "react-slick";
import RightArrow from "../../../rightArrow";
import LeftArrow from "../../../leftArrow";

function TopBrands() {
  const topBrandsItems = [
    {
      id: 1,
      time: "34 min",
      brandImg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/2f03f8299adfedcc5b038433b948e11a_1584120081.png?output-format=webp",
    },
    {
      id: 2,
      time: "34 min",
      brandImg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/e6f2085a4ed0cd750cac265574748f3f_1601467978.png?output-format=webp",
    },
    {
      id: 3,
      time: "34 min",
      brandImg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/76cee521f3905f01a515d71881ff70ae_1630687191.png?output-format=webp",
    },
    {
      id: 4,
      time: "34 min",
      brandImg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/8e596d3800706553f3cd667887d460cd_1698837500.png?output-format=webp",
    },
    {
      id: 5,
      time: "34 min",
      brandImg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383614.png?output-format=webp",
    },
    {
      id: 6,
      time: "34 min",
      brandImg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/cdcfec38a53a7edd76e282bee953e44f_1664867311.png?output-format=webp",
    },
    {
      id: 7,
      time: "34 min",
      brandImg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/8e596d3800706553f3cd667887d460cd_1698837500.png?output-format=webp",
    },
    {
      id: 8,
      time: "34 min",
      brandImg:
        "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383614.png?output-format=webp",
    },
  ];
  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };
  return (
    <div className="max-width">
      <h1 className="DelivaryCollection-heading">Top brands for you</h1>
      <Slider {...settings}>
        {topBrandsItems.map((brand) => (
          <figure
            key={brand.id}
            className="w-auto h-auto m-2 mr-4 flex flex-col  justify-center items-center p-2"
          >
            <img
              src={brand.brandImg}
              alt=""
              className="w-[200px] h-[200px] rounded-full"
            />
            <figcaption className="text-center font-semibold text-gray-600 text-2xl">
              {brand.time}
            </figcaption>
          </figure>
        ))}
      </Slider>
    </div>
  );
}

export default TopBrands;
