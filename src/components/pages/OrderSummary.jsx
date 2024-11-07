import React from "react";
import { IoIosArrowForward, IoMdArrowBack } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../../stateManagement/use-global-context";

export default function OrderSummary() {
  const {fullName, email, price, tax} = useGlobalContext()
  const navigate = useNavigate()

  return (
    <div
      initial={{ opacity: 0.5, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex justify-center items-center bg-[#bfdbfe]/30 backdrop-blur-sm font-openSans"
    >
      <div
        className="bg-[#F1F3F6] w-[90vw] md:w-[70vw] sm:w-[90vw] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white">
          <h1 className=" p-[1rem] text-[1.2rem] font-[400] shadow-sm flex items-center gap-[0.6rem]">
            <IoMdArrowBack onClick={()=> navigate(-1)} className="cursor-pointer"/> Order Summary
          </h1>
        </div>

        <div className="mt-[1.5rem] ">
          <div className="mt-[0.5rem] border bg-red-500 w-full">
            <div className="h-[0.3rem] bg-[#4872C6] w-full"></div>
            <div className="bg-white p-[1rem] shadow">
              <h1 className="text-center text-[1.5rem] sm:text-[1.2rem] text-[#4872c6]">
                Standard Ticket
              </h1>
              <div className="mt-[1.2rem] flex-col sm:flex-row text-center flex sm:grid justify-center gap-[6rem] sm:gap-[1rem]">
                <span className="text-[#2D2C3C]">
                  <h1 className="font-[600] text-[0.9rem] mb-[0.3rem]">
                    {fullName}
                  </h1>
                  <h1 className="font-[600] text-[0.9rem] mb-[0.3rem]">
                    {email}
                  </h1>
                </span>
                <button className="bg-[#4872C6] text-white py-[1rem] sm:px-[1.4rem] sm:py-[0.3rem] rounded-[5px]">
                  NGN {price}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[2rem] bg-white py-[1rem] px-8 ">
          <span className="flex justify-center items-center gap-[1rem] text-center">
            <div className="text-end">
              <h1 className="text-[#5A5A5A] text-[1.1
              rem]">Subtotal:</h1>
              <h1 className="text-[#5A5A5A]">Tax:</h1>
            </div>
            <div className="text-start">
              <h1 className="text-[1.1rem]">NGN {price}</h1>
              <h1 className="">NGN {tax}</h1>
            </div>
          </span>
          <hr className="w-[50%] m-auto my-[1rem]" />
            <span className="flex items-center justify-center gap-[2rem]">
                <h1 className="text-[1rem] sm:text-[1.2rem] font-[500]">Order Total:</h1>
                <h1 className="text-[1rem] sm:text-[1.2rem] font-[500] text-[#3557C2]">NGN {price + tax}</h1>
            </span>
         <button className="bg-[#3557C2] py-[1rem] text-white flex justify-center gap-3 items-center w-full rounded-lg">
         <FaLock className="text-[1.1rem]" /> Pay Now
         </button>
        </div>
      </div>
    </div>
  );
}