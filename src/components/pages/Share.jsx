import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BsCopy } from "react-icons/bs";

export default function Share() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex justify-center items-center bg-[#bfdbfe]/30 backdrop-blur-sm font-openSans"
      >
        <div
          className="bg-white w-[40vw] md:w-[75vw] sm:w-[90vw] transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center text-[#2D2C3C]">
            <h1 className="text-[1.5rem] py-[0.7rem]">Share with friends</h1>
            <hr />
            <div className="flex justify-center my-[3rem] gap-[2rem] text-[2.3rem]">
              <FaFacebook className="text-[#316FF6]" />
              <FaXTwitter />
              <RiWhatsappFill className="text-[#25D366]" />
              <BsLinkedin className="text-[#0762C8]" />
            </div>
            <div className="flex items-center justify-center border-[#F1F3F6] border-[2px] mx-[5rem] sm:mx-[1rem] px-[1rem] text-start text-[#2D2C3C] mb-[5rem]">
              <div>
                <h1 className="font-[300]">Event URL</h1>
                <h1 className="overflow-hidden text-ellipsis">https://www.eventify.com/s/sound-of-christmas-2023-tickets-cmsincshvu</h1>
              </div>
              <BsCopy className="text-[2rem] cursor-pointer"/>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
