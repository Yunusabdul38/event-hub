import image1 from "../../../src/assets/images/image1.png";
import image2 from "../../../src/assets/images/image2.png";
import image3 from "../../../src/assets/images/image3.png";
import EventCard from "../cards/EventCard";

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

  return (
    <div className="lg:px-12 md:px-8 px-4 my-16">
      <h2 className="text-[24px] lg:text-[32px] md:text[28px] font-[700] font-montserrat text-[#2D2C3C]">
        Explore Categories
      </h2>
      <div className="mt-[2rem] flex flex-wrap justify-center lg:gap-[2rem] md:gap-[1rem] gap-4">
        {otherEventsData.map((data, index) => {
          return (
            <EventCard event={data} key={index} />
          );
        })}
      </div>
    </div>
  )
}
