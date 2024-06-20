import React from 'react'
import recommend from "../../../src/assets/images/recommend.png";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function Recommend() {
  return (
    <div className="relative font-montserrat">
          <div className="w-[80vw] md:w-[90vw] h-[30vh] md:h-[25vh] sm:h-[40vh] rounded-[5px] m-auto mb-[2rem]">
            <img src={recommend} alt="" className="w-full h-full sm:object-cover" />
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#2D2C3C]">
            <h1 className="text-[1.8rem] md:text-[1.3rem] sm:text-[1rem] font-[700]">
              Events specially curated for you!
            </h1>
            <p className="text-[0.9rem] sm:text-[0.8rem]">
              Get event suggestions tailored to your interests! Don't let your
              favorite events slip away.
            </p>
            <button className="mt-[2rem] flex m-auto bg-[#2B293D] text-[#FFE047] px-[3rem] sm:px-[1rem] py-[1rem] rounded-[5px] items-center gap-[1rem] text-[1.3rem] sm:text-[1rem]">
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>
  )
}
