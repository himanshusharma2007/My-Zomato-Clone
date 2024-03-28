import React from "react";

function Delivaryitem({ item }) {
  return (
    <div className=" bg-gray-50">
      <figure className="w-auto h-auto m-2 mr-4 flex flex-col  justify-center items-center p-2">
        <img
          src={item.foodImg}
          alt=""
          className="w-[200px] h-[200px] rounded-full"
        />
        <figcaption className="text-center font-semibold text-gray-600 text-2xl">
          {item.title}
        </figcaption>
      </figure>
    </div>
  );
}

export default Delivaryitem;
