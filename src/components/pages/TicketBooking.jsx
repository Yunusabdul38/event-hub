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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex justify-center items-center bg-[#bfdbfe]/30 backdrop-blur-sm font-montserrat"
      >
        <div
          className="bg-[#F1F3F6] w-[40vw] md:w-[75vw] sm:w-[90vw] transition-all"
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

          <div className="mt-[8rem] bg-white py-[1rem]">
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
      </motion.div>
    </AnimatePresence>
  );
}
