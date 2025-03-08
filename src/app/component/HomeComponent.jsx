import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";

function HomeComponent() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className="flex flex-col md:grid md:grid-cols-2">
        <div className="flex flex-col p-4 w-auto">
          <div className='flex'>
            <h1 className='text-3xl font-bold p-2'>WELCOME TO GMFX GLOBAL LIMTED</h1>
          </div>
          <div className='flex'>
            <p className='p-2 text-justify leading-10 text-gray-700 text-sm capitalize break-words'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe voluptatum nemo sint vero voluptate unde minima, maxime iusto blanditiis! Neque similique fugiat aliquam possimus. Voluptate eligendi ratione numquam nobis.
            </p>
          </div>
          <div className='flex p-2'>
            <a href="/pptGMFX.pdf" download={true}>
            <button className='flex w-fit p-2 items-center rounded-b-lg text-xl gap-2 cursor-pointer hover:bg-green-400 shadow-lg shadow-blue-400 bg-green-400'>
              Download PPT <span><FaArrowTrendUp /></span>
            </button>
            </a>
          </div>
        </div>
        <div className='flex items-center h-64 mt-16 md:mt-0 w-auto relative overflow-hidden'>
          <div className='flex justify-center h-full w-full absolute top-0 left-0'>
            <img src={"/Rectangle 9541.png"} alt="" className='w-60 h-60' />
          </div>
          <div className='flex justify-center  w-full absolute top-0 left-2'>
            <img src="/gmfx_1img.png" alt="" className='w-50 h-50' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
