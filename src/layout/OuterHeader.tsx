import React from 'react'

const OuterHeader = () => {
  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="" className="h-8" alt="Simplify Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-200">Simplify</span>
        </a>

        <div className="flex gap-0 md:gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Sign up</button>
          <button type="button" className="text-white focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Login</button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 borde rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   md:bg-gray-900 border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 rounded text-white">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 md:p-0 rounded text-white" aria-current="page">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default OuterHeader