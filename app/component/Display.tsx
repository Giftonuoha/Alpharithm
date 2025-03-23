'use client';
import { useState } from "react";
import Image from "next/image";
import Img1 from "../../public/img1.png";
import Img2 from "../../public/img2.png";
import Img3 from "../../public/img3.png";
import Img4 from "../../public/img4.png";
import Img5 from "../../public/img5.png";

const tabs = [
  { name: "Market Prediction", img: Img1 },
  { name: "Finance", img: Img2 },
  { name: "Analytics", img: Img3 },
  { name: "Content Generation", img: Img4 },
  { name: "Customer Support", img: Img5 },
];

const Display = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="md:w-[644px] md:h-[124px] mx-auto justify-center items-center text-center md:mt-10">
        <p className="font-[Figtree] font-semibold md:text-[50px] leading-[62px] mb-6 text-[#22263F]">
          AI Models tailored for your business needs
        </p>
      </div>
      <div className="lg:w-[860px] md:h-[76px] mx-auto justify-center items-center text-center">
        <p className="font-[Plus_Jakarta_Sans] font-medium md:text-[22px] leading-[38px] text-[#828282] my-9">
            Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="md:w-[701px] md:h-[44px] rounded-[12px] border-1 p-1 gap-1 border-[#E4E4E7] md:mx-auto md:flex justify-between items-center text-center my-8 mx-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={` font-[Figtree] font-semibold text-[16px] leading-[150%] text-[#A7A7A7]  p-1 transition-all duration-300  ${
              activeTab === index ? "rounded-[8px] bg-[#03217F] text-[#FFFFFF]" : "text-[#A7A7A7]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Image Slider Section */}
      <div className="relative flex justify-center overflow-hidden w-full">
        <div className="flex w-full justify-center items-center gap-4 transition-all duration-500">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex-shrink-0 lg:w-[1042.17px] md:w-[521px] w-[300px] lg:h-[523.52px] transition-all duration-500 flex justify-center items-center ${
                activeTab === index ? "scale-110 z-10" : "scale-90 opacity-80"
              }`}
            >
              <Image src={tab.img} alt={tab.name} width={1042} height={523} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;




