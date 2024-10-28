import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import useGlobalContext from "../../stateManagement/use-global-context";

export default function TicketBooking() {
  const {quantity, increaseQuantity, decreaseQuantity, price} = useGlobalContext()
  const navigate = useNavigate();

  function toAttendee() {
    navigate("/attendeeDetails");
  }

  return (
  
        <div
          className="bg-[#F1F3F6]  md:w-[75vw] sm:w-[90vw] transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white">
            <h1 className=" p-[1rem] text-[1.2rem] font-[300] shadow-sm">
              Select Tickets
            </h1>
          </div>

          <div className="mt-[2rem]">
            <span className="flex px-[2rem] justify-between text-[0.8rem] text-[#2D2C3C]">
              <h1>Ticket Types</h1>
              <h1>Quantity</h1>
            </span>
            <div className="flex">
              <div className="w-[0.6rem] bg-[#3557C2]"></div>
              <div className="bg-white w-[100%] p-[1rem] text-[#2D2C3C] flex justify-between">
                <span>
                  <h1 className="text-[1.1rem]">Standard Ticket</h1>
                  <h1 className="text-[0.9rem] font-[200]">NGN {price}</h1>
                </span>
                <span className="flex items-center gap-[0.5rem]">
                  <button disabled={quantity <= 1}>
                    <CiCircleMinus
                      onClick={decreaseQuantity}
                      className="text-[2.5rem] text-[#5A5A5A]"
                    />
                  </button>
                  <h1 className="text-[1.4rem]">{quantity}</h1>
                  <button>
                    <CiCirclePlus
                      onClick={increaseQuantity}
                      className="text-[2.5rem] text-[#5A5A5A]"
                    />
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-[8rem] bg-white py-[1rem] px-2">
            <span className="flex justify-center gap-[8rem]">
              <h1>
                Qty: <span className="text-[#3557C2]">{quantity}</span>
              </h1>
              <h1>
                Total: <span className="text-[#3557C2]">NGN {price}</span>
              </h1>
            </span>
            <button 
              onClick={toAttendee}
              className="flex items-center gap-[0.4rem] mt-[1rem] px-[10rem] sm:px-[6rem] py-[0.5rem] m-auto bg-[#3557C2] rounded-[5px] text-white font-[500] cursor-pointer"
            >
              Proceed <IoIosArrowForward className="text-[1.2rem]" />
            </button>
          </div>
        </div>
  );
}




{/* <form className="z-40 bg-slate-50 w-[90%] sm:w-3/4 md:w-1/2 mx-auto p-4 sm:p-6 capitalize grid gap-4 rounded-md transition-all duration-700 relative">
            <h1 className="capitalize text-center text-orangeText text-2xl">register for fitech meetup</h1>
            <HiXMark className="absolute right-5 top-3 text-2xl hover:text-orangeText" onClick={() => modalHandler()} />
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                name
              </label>
              <input
                type="text"
                id="name"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="john doe"
                ref={nameRef}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#3557c2] flex gap-2 items-center mt-2 bg-orangePrimary hover:bg-gray-600 text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-3 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-full place-content-center"
            >
              Submit
            </button>
          </form> */}