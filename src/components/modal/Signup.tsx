import React from 'react';

import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="p-4">
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 bg-transparent border-gray-500 placeholder-gray-400 text-gray-300"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 bg-transparent border-gray-500 placeholder-gray-400 text-gray-300"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="border text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 bg-transparent border-gray-500 placeholder-gray-400 text-gray-300"
            required
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••"
            className="border text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 bg-transparent border-gray-500 placeholder-gray-400 text-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-violet-500 text-white hover:bg-violet-700 focus:ring-2 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Sign Up
        </button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-y-stone-300"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase py-3"><span className="bg-slate-800 px-2 text-gray-400">Or sign up with</span></div>
        </div>
        {/* Google Signup Button */}
        <button
          type="button"
          className="flex justify-center items-center w-full bg-transparent hover:bg-slate-700 border text-violet-500 hover:text-white border-violet-500  focus:ring-2 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={() => {
            console.log('Google signup clicked');
          }}
        >
          <FaGoogle className='text-xl'/> oogle
        </button>

        <div className="text-sm font-medium text-gray-300 mt-10">
          Already registered?{' '}
          <a href="#" className="text-violet-500 hover:underline">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
