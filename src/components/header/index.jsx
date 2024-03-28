import React from "react";

function Header() {
  return (
    <>
      <div className="max-width flex h-24 justify-between items-center">
      
        <div className="loc-search flex justify-between items-center space-x-10">
          <img
            className="w-40 h-12"
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt=""
          />
          <div className="flex space-x-5 border-2 shadow-lg bg-white w-[50vw] rounded-md">
            <select name="" id="" className="w-40 xl:w-80 p-4 h-16 text-2xl outline-none">
              <option value="">
                
                {/* <i className="fi fi-rr-marker"></i> */}
               Jaipur
              </option>
              <option value="">Kota</option>
              <option value="">Udaipur</option>
            </select>
            <div className=" h-16 flex flex-row justify-center items-center">
              <div
                id="searchContainer"
                className=" flex flex-row items-center relative top-0 text-2xl text-gray-400 space-x-0 cursor-pointer  w-auto  h-auto "
              >
                <i className="fas fa-search icon mr-2"></i>
              </div>
              <input
                className="w-full z-10 border-none outline-none xl:text-2xl text-md"
                type="text"
                  placeholder="Search for restorents"
              />
            </div>
          </div>
        </div>
        <div className="right-head flex flex-row justify-center items-center space-x-9">
          <a href="#">
            <h1 className="text-xl ml-2 min-w-20 xl:text-3xl text-gray-400 hover:text-gray-500">
              Log in
            </h1>
          </a>
          <a href="#">
            <h1 className="text-xl ml-2 min-w-20 xl:text-3xl text-gray-400 hover:text-gray-500">
              Sign up
            </h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
