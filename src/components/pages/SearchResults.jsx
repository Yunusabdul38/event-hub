import image1 from "../../../src/assets/images/image1.png";
import image2 from "../../../src/assets/images/image2.png";
import image3 from "../../../src/assets/images/image3.png";
import Recommend from "./Recommend";
import OtherEvents from "./OtherEvents";
import { useNavigate } from "react-router-dom";
import { FaSliders } from "react-icons/fa6";
import SeaarchHeader from "./seaarchHeader";
import { useState } from "react";
import EventCard from "../cards/EventCard";
import Filter from "./Filter";

export default function SearchResults() {
  const [showFilter, setShowFilter] = useState(false);
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
  const filterHandler=()=>{
    setShowFilter(prev=>!prev)
  }
  return (
    <>
    <div className="overflow-x-hidden">
      <SeaarchHeader/>
      <div className="md:px-20">
      <div className="px-[1.5rem] mt-[2rem] text-[#2D2C3C]">    
        <h1 className="text-[1.3rem] flex items-center gap-[0.5rem]">Filter <FaSliders className="text-[1.3rem] md:hidden" onClick={filterHandler}/></h1>
      </div>
      <div className="md:px-12 flex gap-[2rem]">
        <Filter showFilter={showFilter}/>
        <div className="h-[130vh] border-[0.1px] border-[#d1d5db] md:hidden"></div>
        
         <div className="mt-[2rem] flex flex-wrap justify-center gap-[2rem] md:gap-[1rem] sm:gap-0">
            {upcomingData.map((data, index) => {
              return (
                <EventCard event={data} key={index} />
              );
            })}
          </div>
      </div>
      </div>
    </div>
    <div>
    <div className="px-[4rem] md:px-0">
        <Recommend />
      </div>

      <div className="px-[4rem] md:px-[1rem]">
        <OtherEvents />
      </div>
    </div>
    </>
  );
}
