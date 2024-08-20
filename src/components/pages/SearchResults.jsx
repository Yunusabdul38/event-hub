import React, { useState } from "react";
import coverimage from "../../../src/assets/images/coverImage.jpeg";
import { IoSearch } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import image1 from "../../../src/assets/images/image1.png";
import image2 from "../../../src/assets/images/image2.png";
import image3 from "../../../src/assets/images/image3.png";
import { IoTicket } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Recommend from "./Recommend";
import OtherEvents from "./OtherEvents";
import { useNavigate } from "react-router-dom";
import { FaSliders } from "react-icons/fa6";

export default function SearchResults() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  function toEventDesc(){
    navigate('/eventdescription')
  }

  const upcomingData = [
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
  ];

  return (
    <div>
      <div className="relative">
        <div className="w-[100vw] h-[40vh] md:h-[30vh] relative">
          <img src={coverimage} alt="" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(53,87,194,0.9)] to-[rgba(53,87,194,0.9)] via-[rgba(45,44,60,0.9)20%]"></div>
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-white text-center text-[1.8rem] md:text-[1.5rem] font-[700] font-montserrat">
            Explore a world of events. Find what excites you!
          </h1>
          <div className="flex mt-[3rem] md:mt-[1rem]">
            <div className="relative flex ">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[40vw] sm:w-[45vw] h-[6vh] md:h-[5vh] sm:h-[6.5vh] rounded-tl-[5px] rounded-bl-[5px] px-[3rem] text-[1.3rem] focus:outline-none"
              />
              <IoSearch className="absolute left-3 top-0 mt-[0.7rem] md:mt-[0.9rem]  text-[1.6rem] sm:text-[1.2rem] text-[#5A5A5A]" />
              {/* <button className="ml-[-3rem]">
                <LiaTimesSolid className="text-[1.7rem] text-[#BBBBBB]" />
              </button> */}
            </div>
            <div className="relative border-l-[0.5px] border-black text-[#5A5A5A]">
            <SlLocationPin className="absolute top-[0.9rem] left-4 text-[1.5rem] sm:text-[1.2rem]"/>
              <select
                name=""
                id=""
                className="h-[6vh] md:h-[5vh] sm:h-[6.5vh] px-[3rem] sm:px-[2.5rem] py-[0.78rem] focus:outline-none rounded-tr-[5px] rounded-br-[5px] appearance-none"
              >
                <option value=""> Places in Kd</option>
              </select>
              <div className="absolute right-3 top-[1.1rem] pointer-events-none">
                <IoIosArrowDown className="text-[1.1rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block px-[1.5rem]  mt-[2rem] text-[#2D2C3C]">    
        <h1 className="text-[1.3rem] flex items-center gap-[0.5rem]">Filter <FaSliders className="text-[1.3rem]"/></h1>
      </div>
      <div className="mt-[3rem] px-[3rem] md:px-[1rem] flex gap-[2rem]">
        <div className="md:hidden">
          <h1 className="text-[1.6rem] font-[600] font-montserrat">Filters</h1>
          <div className="mt-[1.5rem]">
            <h1 className="text-[1.1rem] font-[500] mb-[1rem]">Price</h1>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Free</h1>
            </div>
            <div className="flex gap-[0.4rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Paid</h1>
            </div>
            <hr className="mt-[2rem]" />
          </div>
          <div className="mt-[1.5rem]">
            <h1 className="text-[1.1rem] font-[500] mb-[1rem]">Date</h1>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Today</h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">This Week</h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">This Weekend</h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Pick A Date</h1>
            </div>
            <a href="">
              <p className="text-[0.9rem] font-[300] text-[#4539B4]">More</p>
            </a>
            <hr className="mt-[2rem]" />
          </div>
          <div className="mt-[1.5rem]">
            <h1 className="text-[1.1rem] font-[500] mb-[1rem]">Category</h1>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Adventure Travel</h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Art Exhibitions</h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">
                Auctions & Fundraisers
              </h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Beer Festivals</h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Benefit Concerts</h1>
            </div>
            <a href="">
              <p className="text-[0.9rem] font-[300] text-[#4539B4]">More</p>
            </a>
            <hr className="mt-[2rem]" />
          </div>
          <div className="mt-[1.5rem]">
            <h1 className="text-[1.1rem] font-[500] mb-[1rem]">Format</h1>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Community Engagement</h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">
                Concerts & Performances
              </h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Conferences</h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Experiential Events</h1>
            </div>
            <div className="flex gap-[0.4rem] mb-[0.5rem]">
              <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
              <h1 className="font-[300] text-[0.8rem]">Festivals & Fairs</h1>
            </div>
            <a href="">
              <p className="text-[0.9rem] font-[300] text-[#4539B4]">More</p>
            </a>
            <hr className="mt-[2rem]" />
          </div>
        </div>

        <div className="h-[130vh] border-[0.1px] border-[#d1d5db] md:hidden"></div>

        <div className="mt-[2rem] md:mt-[-2rem] grid md:flex md:flex-wrap grid-cols-2 m-auto justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
          {upcomingData.map((data, index) => {
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
                    <div className="w-[25rem] md:w-[22rem] sm:w-[20.5rem] h-[28vh] md:h-[20vh]  rounded-tr-[10px] rounded-tl-[10px]">
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
                  <div className="px-[1rem] md:px-0 mt-[1rem] flex gap-[1rem] md:gap-[0.5rem] text-[#2D2C3C]">
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

      <div className="px-[4rem] md:px-0">
        <Recommend />
      </div>

      <div className="px-[4rem] md:px-[1rem]">
        <OtherEvents />
      </div>
    </div>
  );
}
