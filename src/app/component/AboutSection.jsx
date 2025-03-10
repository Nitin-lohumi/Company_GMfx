import Link from "next/link";
import React from "react";
import AdBanner from './AddBanner';
function AboutSection() {
  return (
    <div className="mt-40 pt-6">
      <div className="text-3xl font-bold text-center capitalize p-2">
        About Us
      </div>
      <div className="flex  flex-col p-4">
        <h1 className="text-left text-2xl">Welcome To GMFX Global I Limited</h1>
        <p className="flex leading-7  text-justify text-2xl pt-10">
          We give you an opportunity to become the owner of own business and
          leader of your team. Every time you speak to someone about your
          business you are involved in marketing. Any conversation about your
          firm is an opportunity to promote your business and increase sales
        </p>
        <p className="flex leading-10 text-justify  text-xl pt-10">
          We are providing you opportunities for generating revenue from many
          sectors like Education, Computer Education, Marketing strategies and
          Fin-tech
        </p>
        <div className="flex justify-center gap-2 pt-8  w-fit m-auto flex-col">
          <img src="/gmfx_IMG1.jpg" alt="" className="w-64 h-64 " />
          <img src="/image1.1.jpg" alt="" className="w-64 h-64 " />
        </div>
        <AdBanner/> 
        <div className="flex flex-col text-3xl mt-12 font-bold">
          <ul className="list-none">
            <li>EVERYONE HAS DESIRES</li>
          </ul>

          <div className="flex flex-col pt-6 md:flex-row gap-8">
            <img
              src="/image2.2.jpg"
              alt="Desire Image 1"
              className="w-full max-w-md"
            />
            <img
              src="/homeImage.jpg"
              alt="Desire Image 2"
              className="w-full max-w-md"
            />
            <img
              src="/carImage.jpg"
              alt="Desire Image 3"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <li className="text-2xl font-bold text-left p-5 mt-4"> GMFX USP</li>
        <div className="flex flex-col p-7">
          <p className=" leading-10 text-2xl ">
            100% Legal & Genuine concept. Orginal Revenue Generation Plan.
            Automiatic payment transfer to the customer’s account at the time of
            payment. Member will also get GST receipt.
          </p>
          <p>100% Risk free business opportunity</p>
        </div>
      </div>
      <div>
        <div className="flex p-6 flex-col">
          <li className="text-2xl font-bold text-left  mt-4">
            TERMS & CONDITIONS
          </li>
          <div className="p-4 leading-10 text-2xl text-justify">
            <li>
              5% Admin 5% TDS Charges will be deducted from every working income
            </li>
            <li>10k Re-Top up After 50k Working Profit</li>
            <li>2 Direct references are compulsory to get working income.</li>
            <li>
              After receiving principal amount, 5% tds will be deduct every
              month from master bonus
            </li>
            <li>
              5% society development charge on master bonus from real estate
              package.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
