"use client"

import Link from 'next/link';
import { useState } from 'react';

export default  function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex  w-full fixed top-0 z-50  items-center shadow-xl flex-wrap bg-white p-3 '>
        <Link
  				href='/'
  				className='inline-flex items-center p-2 mr-4'
			>
  				<span className='text-4xl font-bold  bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent '>
    				GymGenie
  				</span>
			</Link>
        <button
          className= "inline-flex p-3  rounded lg:hidden text-black ml-auto  outline-none"
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </button>
       
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row  lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <a
             href='/'
             className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center hover:shadow text-black '>
                Home
            </a>
            <hr className="lg:hidden border-t-2 border-gray-400 w-full mx-auto my-auto "/>

            <a
             href="#about"
            
             className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center hover:shadow text-black '>
                About
            </a>
            <hr className="lg:hidden border-t-2 border-gray-400 w-full mx-auto my-auto "/>
             
             <a
             href="#workplan"
             className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black  items-center justify-center hover:shadow text-black '>
                Workout Plan <span className='font-bold bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent' >&nbsp;&nbsp;New Models!!!</span>
            </a>
            <hr className="lg:hidden border-t-2 border-gray-400 w-full mx-auto my-auto "/>
            
          </div>
           <div className='lg:hidden sm:block'>
					<a href="/signIn"> <button className='bg-gradient-to-r from-fuchsia-500 to-fuchsia-900 w-full text-white h-3 mt-5 flex items-center justify-center font-bold  p-5  rounded	'>Sign In</button></a>
           		<a href="/signUp" > <button className=' w-full text-black h-3 mt-5 flex items-center justify-center font-bold  p-5  rounded	'>Sign up</button> </a>           
            </div>
          <div className='ml-auto sm:hidden lg:block'>
				<a href="/signIn/" >	 <button className='hover:text-gray-400 text-black p-5 w-36'>Sign In</button></a>
           	<a href="../signUp">	 <button className='hover:bg-blue-700  bg-blue-500 p-5 w-36 rounded'>Sign up</button>   </a>         
            </div>
        </div>
      </nav>
    </>
  );
};