import React from "react";

function Filter({FilterContaint}) {
  const PrintFilterContaint = () => {
    return FilterContaint.map((containt) => {
      return (
        <li key={containt.id} className="border-2 border-gray-300 shadow-sm p-2 rounded-lg text-sm text-gray-400 hover:text-gray-500 hover:border-gray-400 font-bold cursor-pointer flex justify-center items-center space-x-3">
            {containt.icon}
          {containt.title}

        </li>
      );
    });
  };
  
  return (
    <div className="max-width">
      {/* <h1>hello this is filter</h1> */}
      <ul className="flex flex-row space-x-3">
        {PrintFilterContaint()} {/* Call the function to render */}
      </ul>
    </div>
  );
}

export default Filter;
