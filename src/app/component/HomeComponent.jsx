import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import AdBanner from './AddBanner';
function HomeComponent() {
  return (
    <div className='h-screen flex justify-center items-center mt-40'>
      <div className="flex flex-col md:grid md:grid-cols-2 mt-32">
        <div className="flex flex-col p-4 w-auto">
          <div className='flex'>
            <h1 className='text-3xl font-bold p-2'>WELCOME TO GMFX GLOBAL LIMTED</h1>
          </div>
          <div className='flex'>
            <p className='p-3 text-2xl text-justify leading-10 text-gray-700  capitalize break-words'>
            We give you an opportunity to become the owner of own business and
          leader of your team. Every time you speak to someone about your
          business you are involved in marketing. Any conversation about your
          firm is an opportunity to promote your business and increase sales
            </p>
          </div>
          <div className='flex p-2'>
            <a href="/pptGMFX.pdf" download={true}>
            <button className='flex w-fit p-2 items-center rounded-b-lg text-xl gap-2 cursor-pointer hover:bg-green-400 shadow-lg shadow-blue-400 bg-green-400'>
              Download PPT <span><FaArrowTrendUp /></span>
            </button>
            </a>
          </div>
          <AdBanner/> 
          {/* added component */}
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
      <AdBanner/> 
    </div>
  );
}

export default HomeComponent;
