import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BsCopy } from "react-icons/bs";
import SocialShare from "../SocialShare";

export default function Share({title,location}) {
  const url = window.location.href;
   const [copySuccess, setCopySuccess] = useState('');

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopySuccess('Copied!');
        } catch (error) {
            setCopySuccess('Failed to copy!');
        }
        // Clear the success message after a delay
        //setTimeout(() => setCopySuccess(''), 2000);
    };
  return (
        <div
          className="bg-white w-11/12 md:w-[75vw] sm:w-[90vw] transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center text-[#2D2C3C]">
            <h1 className="text-[1.5rem] py-[0.7rem]">Share with friends</h1>
            <hr/>
            <SocialShare url={url} title={`hey am going to ${title} at ${location}`} /> 
            <div className="flex items-center justify-center mx-auto border-[#F1F3F6] border-[2px] w-11/12 sm:mx-[1rem] px-[1rem] text-start text-[#2D2C3C] mb-[5rem]">
              <div>
                <h1 className="font-[300]">Event URL</h1>
                <h1 className="overflow-hidden text-ellipsis">{url}</h1>
              </div>
              <BsCopy className="text-lg cursor-pointer"  onClick={handleCopy}/>
            </div>
          </div>
        </div>
  );
}
