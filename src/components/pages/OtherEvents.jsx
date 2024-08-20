import React from 'react'
import image1 from "../../../src/assets/images/image1.png";
import image2 from "../../../src/assets/images/image2.png";
import image3 from "../../../src/assets/images/image3.png";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const otherEventsData = [
    {
        image: image1,
        location: "Colab",
        month: "JAN",
        date: "25 - 26",
        title: "Introduction to Artificial Intelligence (AI)",
        time: "8:30 AM - 7:30 PM",
        ticket: "Free",
        interested: 14,
      },
      {
        image: image2,
        location: "Ihifix",
        month: "FEB",
        date: "01 - 04",
        title: "Africa Soft Power Summit 2024",
        time: "8:30 AM - 7:30 PM",
        ticket: "Free",
        interested: 14,
      },
      {
        image: image3,
        location: "KADAHIVE",
        month: "FEB",
        date: "25 - 26",
        title: "The RollApp Draft Hackathon Powered b...",
        time: "8:30 AM - 7:30 PM",
        ticket: "Free",
        interested: 14,
      },
]

export default function OtherEvents() {
  const navigate = useNavigate()

  function toEventDesc(){
    navigate('/eventdescription')
  }
  return (
    <div>
      <h1 className="font-[500] text-[1.6rem] sm:text-[1.4rem] text-[#2D2C3C]">Other events you may like</h1>
      <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
            {otherEventsData.map((data, index) => {
              const {
                image,
                location,
                title,
                date,
                month,
                interested,
                time,
                ticket,
              } = data;

              return (
                <div key={index} className="mb-[3rem] cursor-pointer" onClick={toEventDesc}>
                  <div className="relative">
                    <div className="w-[25rem] md:w-[22rem] h-[28vh] md:h-[20vh] rounded-tr-[10px] rounded-tl-[10px]">
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover rounded-tr-[10px] rounded-tl-[10px]"
                      />
                    </div>
                    <div className="w-[3rem] h-[3rem] rounded-[100px] bg-white absolute top-3 right-5">
                      <MdOutlineStarBorderPurple500 className="text-[1.7rem] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                  <div className="px-[1rem] md:px-0 mt-[1rem] flex gap-[1rem] md:gap-[0.4rem] text-[#2D2C3C]">
                    <div className="">
                      <h1 className="text-[#4539B4] font-[600] text-center">
                        {month}
                      </h1>
                      <h1 className="text-center text-[#2D2C3C] font-[600]">
                        {date}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-[1.1rem] font-[500]">{location}</h1>
                      <p className="text-[0.9rem]">{title}</p>
                      <p className="text-[0.8rem] font-[300]">{time}</p>
                      <div className="flex items-center gap-[0.7rem]">
                        <span className="flex items-center gap-[0.3rem] text-[#5A5A5A] text-[0.9rem]">
                          <IoTicket />
                          <h1>{ticket} </h1>
                        </span>
                        <GoDotFill className="text-[0.6rem] text-[#5A5A5A]" />
                        <span className="flex items-center gap-[0.3rem]">
                          <IoStar className="text-[#4539B4]" />
                          <h1 className="text-[#5A5A5A] text-[0.9rem]">
                            {interested} interested
                          </h1>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
    </div>
  )
}
