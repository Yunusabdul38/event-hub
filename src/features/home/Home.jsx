import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import coverimage from "../../../src/assets/images/coverImage.jpeg";
import tech from "../../../src/assets/images/tech.png";
import cultural from "../../../src/assets/images/cultural.png";
import education from "../../../src/assets/images/education.png";
import entertainment from "../../../src/assets/images/entertainment.png";
import field from "../../../src/assets/images/field.png";
import governmental from "../../../src/assets/images/governmental.png";
import { IoTicket } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import image1 from "../../../src/assets/images/image1.png";
import image2 from "../../../src/assets/images/image2.png";
import image3 from "../../../src/assets/images/image3.png";
import Recommend from "../../components/pages/Recommend";
import OtherEvents from "../../components/pages/OtherEvents";
import { FaSliders } from "react-icons/fa6";

const categoriesData = [
  { name: "Technology & Innovation", image: tech },
  { name: "Entertainment", image: entertainment },
  { name: "Educational & Business", image: education },
  { name: "Cultural & Arts", image: cultural },
  { name: "Governmental", image: governmental },
  { name: "Sports & Fitness", image: field },
];

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
];
export default function Home() { 
  const navigate = useNavigate()
  const [searchEvent, setSearchEvent] = useState("Google Dev Fest");
  const [placeValue, setPlaceValue] = useState("KadaHive");
  const [timeValue, setTimeValue] = useState("Any Date");

  function toEventDesc(){
    navigate('/eventdescription')
  }

  useEffect(() => {
    const storedValue = localStorage.getItem("searchEvent");
    if (storedValue) {
      setSearchEvent(storedValue);
    }
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("placeValue");
    if (storedValue) {
      setPlaceValue(storedValue);
    }
  }, []);
  useEffect(() => {
    const storedValue = localStorage.getItem("timeValue");
    if (storedValue) {
      setTimeValue(storedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchEvent", searchEvent);
  }, [searchEvent]);
  useEffect(() => {
    localStorage.setItem("placeValue", placeValue);
  }, [placeValue]);
  useEffect(() => {
    localStorage.setItem("timeValue", timeValue);
  }, [timeValue]);

  const handleSearchChange = (event) => {
    setSearchEvent(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTimeValue(event.target.value);
  };
  const handlePlaceChange = (event) => {
    setPlaceValue(event.target.value);
  };
  return (
    <div>
      <div>
        <div className="relative">
          <div className="w-[100vw] h-[40vh] z-10">
            <img
              src={coverimage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute ml-auto mr-auto left-0 right-0 top-[9rem] md:top-[10rem] sm:top-[11rem] font-montserrat">
            <h1 className="text-center text-white text-[2.5rem] sm:text-[1.5rem] font-[600]">
              Don’t miss out!
            </h1>
            <h1 className="text-center text-white text-[2.5rem] sm:text-[1.4rem] font-[600]">
              Explore the <span className="text-[#FFE047]">vibrant events</span>{" "}
              happening locally and globally.
            </h1>
          </div>
          <div className="bg-[#3557C2] sm:hidden absolute ml-auto mr-auto left-0 right-0 bottom-[-4rem] w-[60vw] md:w-[75vw] rounded-[10px] px-[3rem] py-[1.5rem] text-white">
            <form action="" className="flex justify-center gap-[4rem] md:gap-[2rem]">
              <div className="grid gap-[0.6rem]">
                <label htmlFor="" className="text-[0.7rem] font-[200]">
                  Search Event
                </label>
                <input
                  type="text"
                  value={searchEvent}
                  onChange={handleSearchChange}
                  className="border-b-[0.5px] border-[#7778B0] bg-[#3557C2] focus:outline-none"
                />
              </div>
              <div className="grid gap-[0.6rem]">
                <label htmlFor="" className="text-[0.7rem] font-[200]">
                  Place
                </label>
                <input
                  type="text"
                  value={placeValue}
                  onChange={handlePlaceChange}
                  className="border-b-[0.5px] border-[#7778B0] bg-[#3557C2] focus:outline-none"
                />
              </div>
              <div className="grid gap-[0.6rem]">
                <label htmlFor="" className="text-[0.7rem] font-[200]">
                  Time
                </label>
                <select
                  name=""
                  id=""
                  className="border-b-[0.5px] w-[15vw] border-[#7778B0] bg-[#3557C2] focus:outline-none"
                  onChange={handleTimeChange}
                >
                  <option value="">Any Date</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-[8rem] sm:mt-[3rem] px-[4rem] md:px-[1rem]">
        <div>
          <h1 className="text-[1.5rem] font-[700] font-montserrat text-[#2D2C3C]">
            Explore Categories
          </h1>
          <div className="flex sm:flex-wrap gap-[3.5rem] md:gap-[2rem] justify-center mt-[2rem] sm:mt-[1rem]">
            {categoriesData.map((data, index) => {
              const { name, image } = data;

              return (
                <div key={index} className="grid w-[10rem] sm:w-[5rem] cursor-pointer">
                  <div className="w-[8rem] md:w-[5rem]  h-[8rem] md:h-[5rem] m-auto rounded-[100px]">
                    <img src={image} alt="" className="object-cover" />
                  </div>
                  <h1 className="text-center mt-[1rem] text-[0.9rem] sm:hidden">
                    {name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-[5rem] mb-[5rem]">
          <div className="flex md:justify-between items-center gap-[13rem] md:gap-[3rem]">
            <h1 className="font-poppins font-[500] text-[1.6rem] text-[#242565]">
              Upcoming Events
            </h1>
            <div className="xl:hidden md:block">
              <FaSliders className="text-[1.4rem]"/>
            </div>
            <div className="flex gap-[2rem] text-[#1D275F] text-[0.9rem] md:hidden">
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Weekdays</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Event Type</option>
                </select>
              </div>
              <div className="bg-[#F2F4FF] rounded-[50px] px-[1rem] py-[0.3rem]">
                <select
                  name=""
                  id=""
                  className="w-[9vw] bg-[#F2F4FF] focus:outline-none"
                >
                  <option value="">Any Category</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
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
                    <div className="w-[25rem] md:w-[22rem] h-[28vh] md:h-[20vh]  rounded-tr-[10px] rounded-tl-[10px]">
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
          <button className="bg-[#3557C2] px-[10rem] sm:px-[7rem] py-[0.5rem] rounded-[5px] text-white flex m-auto">
            See More
          </button>
        </div>

        <div className="mt-[5rem] mb-[5rem]">
          <div className="flex items-center gap-[13rem]">
            <h1 className="font-poppins font-[500] text-[1.6rem] text-[#242565]">
              Popular Events
            </h1>
          </div>
          <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
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
          <button className="bg-[#3557C2] px-[10rem] sm:px-[7rem] py-[0.5rem] rounded-[5px] text-white flex m-auto">
            See More
          </button>
        </div>

        <Recommend/>    
        <OtherEvents />
      </div>
    </div>
  );
}
