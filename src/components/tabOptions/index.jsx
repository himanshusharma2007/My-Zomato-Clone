import React, { useState } from "react";

function TabOptions({ CurrTab, SetcurrTab }) {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleClick1 = (value, name) => {
    const tabStyle = document.getElementById(`${name}`);
    if (selectedTab) {
      const previousTabStyle = document.getElementById(`${selectedTab}`);
      previousTabStyle.style.borderColor = "transparent"; // Remove border from previous tab
    }
    tabStyle.style.borderColor = "red"; // Set border for current tab
    setSelectedTab(name);
    SetcurrTab(value);
  };

  return (
    <div>
      <div className="max-width main flex flex-row space-x-20 w-full h-30 mt-0 mb-0 sticky" style={{ top: 0 }}>
        <div
        id="DiningOut"
          onClick={() => handleClick1("Dining Out","DiningOut")}
          className="item h-20 border-b-4 border-b-white hover:border-b-4 pb-4 
          cursor-pointer  justify-center items-center flex flex-row space-x-5 w-[250px] "
        
        >
          <div className="">
          <div className="logo flex justify-center items-center w-16 h-16 bg-pink-200  hover:text-red-400 rounded-full ">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp"
              alt=""
              className="w-12 h-12"
            />
            </div>
          </div>
          <h1 className="text-3xl text-gray-600 hover:text-gray-900">Dining Out</h1>
        </div>
        <div id="Delivary"
          onClick={() => handleClick1("Delivary","Delivary")}
          className="item h-20 border-b-4 hover:border-b-4 pb-4   border-b-white   cursor-pointer  justify-center items-center flex flex-row space-x-5 w-[250px]"
        
        >
          <div className="logo flex justify-center items-center w-16 h-16 bg-pink-200 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp"
              alt=""
              className="w-12 h-12"
            />
          </div>
          <h1 className="text-3xl text-gray-600  hover:text-gray-900">Delivary</h1>
        </div>
        <div id="Nightlife"
          onClick={() => handleClick1("Nightlife","Nightlife")}
          className="item h-20 border-b-4 hover:border-b-4 border-b-white pb-4   cursor-pointer  justify-center items-center flex flex-row space-x-5 w-[250px]"
        >
          <div className="logo flex justify-center items-center w-16 h-16 bg-pink-200 rounded-full">
            <img
              src="	https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
              alt=""
              className="w-12 h-12"
            />
          </div>
          <h1 className="text-3xl text-gray-600 hover:text-gray-900">Nightlife</h1>
        </div>
      </div>
    </div>
  );
}

export default TabOptions;
