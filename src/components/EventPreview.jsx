import { RxCalendar } from "react-icons/rx";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import PropTypes from "prop-types";
import { useView } from "../hooks/useView";
import OtherEvents from "./pages/OtherEvents";
import Image from "../assets/images/blocks.png"

export default function Review() {
  // //Event details
  // const {
  //   title: { name: Title },
  //   banner: { image },
  //   session,
  //   description: { detail },
  //   location: { name: place },
  //   EventTicketType,
  //   SellingTicketType,
  // } = eventDetails;

  //effect to makes component view start from the top of the page
  useView();

  return (
    <>
      <section className="capitalize w-full lg:px-16 pt-6 mx-auto max-w-4xl text-[#2D2C3C]">
       
        <div className="p-6 border-[#2B293D] border-[3px] rounded-2xl my-8">
          <div className="h-[300px] rounded-md">
            <img
              src={Image}
              className="m-auto w-full object-cover h-full rounded-md flex justify-center items-center"
            />
          </div>
          <h1 className="my-4 capitalize text-center md:text-start text-2xl font-bold">
            react bootcamp
          </h1>
          <div className="w-full flex md:flex-row gap-3 md:gap-0 flex-col justify-between items-start">
            <div className="text-sm grid gap-3">
              <h3 className="font-medium text-xl capitalize">date and time</h3>
                    <h5 className="flex items-center gap-2">
                      <RxCalendar />
                      12/12/2023
                    </h5>
                    <h5 className="flex items-center gap-2">
                      <MdOutlineAccessTime />
                      9:00 - 12:00
                    </h5>
                    <h5 className="ml-5 text-[#4539B4]">
                      <a
                        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=react bootchamp&dates=12/12/2023T$9:00Z/$12/12/2023T1Z&details=none&location=$kaduna`}
                        target="_blank"
                      >
                        + add to calendar
                      </a>
                    </h5>              
            </div>
            <div className="text-sm grid gap-3 h-fit">
              <h3 className="font-medium text-xl">ticket information</h3>
             
                  <h5 className="flex items-center gap-2">
                    <IoTicket /> ticket type: free /
                  </h5>
              
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            <h3 className="font-medium text-xl capitalize">kaduna</h3>
            <h5 className="inline-flex text-sm items-center gap-2">
              <CiLocationOn /> address
            </h5>
            <div className="w-full max-w-xl h-80  rounded-md mx-auto lg:mx-0 border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31383.264972843925!2d7.4186407276351!3d10.50790263235687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d355834371775%3A0x480195979abfe174!2sKaduna%20800283%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1724044659683!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            <h3 className="font-medium text-xl">hosted by</h3>
            <div className="grid grid-cols-[.5fr_2fr] max-w-64 gap-3">
              <div className="rounded-md bg-[#B9B9B9]" />
              <div className="grid gap-2">
                <h3 className="font-semibold text-sm">Host Name</h3>
                <div className="flex gap-1">
                  <button className="capitalize px-3  py-[2px] border">
                    contact
                  </button>
                  <button className="capitalize px-3 py-[2px] border">
                    + follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            <h3 className="font-medium text-xl capitalize">Event Description</h3>
            <p className="text-[#5A5A5A] font-normal text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nobis quidem quod, nihil itaque provident minima qui eos. Aperiam officiis sed quibusdam dolor iusto quo magni hic, id aliquam necessitatibus recusandae dolorem ut, expedita enim! Eius aliquam id saepe qui, aperiam vitae repellat veritatis natus neque maiores provident iste officia! Saepe debitis blanditiis numquam recusandae praesentium dolor voluptate vitae commodi iusto incidunt perferendis ipsa, cumque non perspiciatis quod nihil delectus voluptatibus. Ab rem iste rerum minima, ipsam perspiciatis adipisci, architecto dignissimos a ut aperiam accusantium earum fugit aspernatur reprehenderit omnis qui cumque tenetur optio sint nihil! Mollitia nobis vel perspiciatis.</p>
          </div>
        </div>
      </section>
      <div className="mt-[5rem] md:px-0">
        <OtherEvents />
      </div>
    </>
  );
}

Review.propTypes = {
  eventDetails: PropTypes.object,
};
