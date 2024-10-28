import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BsCopy } from "react-icons/bs";

export default function Share() {
  return (
    
        <div
          className="bg-white w-11/12 md:w-[75vw] sm:w-[90vw] transition-all"
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
            <div className="flex items-center justify-center mx-auto border-[#F1F3F6] border-[2px] w-11/12 sm:mx-[1rem] px-[1rem] text-start text-[#2D2C3C] mb-[5rem]">
              <div>
                <h1 className="font-[300]">Event URL</h1>
                <h1 className="overflow-hidden text-ellipsis">https://www.eventify.com/s/sound-of-christmas-2023-tickets-cmsincshvu</h1>
              </div>
              <BsCopy className="text-lg cursor-pointer"/>
            </div>
          </div>
        </div>
  );
}
