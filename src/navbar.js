import React from "react";


const Navbar = () => {
  return (
    <nav>
      <div class=" mx-auto px-6 py-2 flex justify-center">
        <img className="w-12 h-12" src="https://cdn-icons-png.flaticon.com/512/3448/3448609.png"  />
        <a class="text-1xl  rounded-md lg:text-3xl font-bold tracking-wider" href="#"
          style={{ fontFamily: "Dancing Script", color: "purple" }}>
          <h1 className="text-center text-black-800">EXPLORE NEW YORK CITY</h1>
        </a>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex mt-3">
            
          </ul>
        </div>
      </div>
      <hr className="mt-2" />
    </nav>
  )
}
export default Navbar; 