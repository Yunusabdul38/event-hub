import PropTypes from "prop-types";
import { IoTicket } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { IoStar } from "react-icons/io5";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";


const EventCard = ({ event }) => {
  const {
    image,
    location,
    title,
    date,
    month,
    interested,
    time,
    ticket,
  } = event;
  return (
    <Link to={`/eventdescription`} className="mb-[3rem] border border-gray-50 hover:border-gray-100 transition-all duration-300 p-4 rounded-[8px] cursor-pointer max-w-96">
          <img
            src={image}
            alt=""
            className="w-full h-1/2 object-cover rounded-tr-[10px] rounded-tl-[10px]"
          />      
      <div className="mt-9 px-[1rem] md:px-0 flex gap-[1rem] md:gap-[0.5rem] text-[#2D2C3C]">
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
    </Link>
  );
};

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
};