import React, { useState } from "react";
import { IoIosArrowForward, IoMdArrowBack } from "react-icons/io";
import { IoCalendarOutline, IoStar, IoTicket } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import useGlobalContext from "../../stateManagement/use-global-context";

export default function AttendeeDets() {
  const {fullName, setFullName, email, setEmail, phone, setPhone, price, quantity} = useGlobalContext()
  const navigate = useNavigate();

  function toCheckout() {
    navigate("/orderSummary");
  }

  return (
    <div
      initial={{ opacity: 0.5, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex justify-center items-center bg-[#bfdbfe]/30 backdrop-blur-sm font-openSans"
    >
      <div
        className="bg-[#F1F3F6] w-[40vw] md:w-[75vw] sm:w-[90vw] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white">
          <h1 className=" p-[1rem] text-[1.2rem] font-[400] shadow-sm flex items-center gap-[0.6rem]">
            <IoMdArrowBack
              onClick={() => navigate(-1)}
              className="cursor-pointer"
            />{" "}
            Attendee Details
          </h1>
        </div>

        <div className="flex justify-between px-[1rem] mt-[1rem] text-[#5A5A5A] text-[0.9rem] sm:text-[0.7rem]">
          <h1>AI/ML Summit 2024</h1>
          <h1 className="flex items-center gap-[0.3rem]">
            <IoCalendarOutline /> Saturday, 2 May 2024 
          </h1>
        </div>

        <div className="mt-[1.5rem] px-[1.5rem]">
          <h1 className="text-[0.9rem] text-[#2D2C3C]">
            Standard Ticket: Ticket #1
          </h1>
          <div className="mt-[0.5rem]">
            <div className="h-[0.3rem] bg-[#4872C6]"></div>
            <div className="bg-white p-[1rem]">
              <form action="" className="grid gap-[1rem]">
                <div className="grid">
                  <label htmlFor="" className="text-[#636363] text-[0.9rem]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter Attendee’s full name"
                    className="border-[#d1d5db] border-[1px] rounded-[5px] px-[1rem] py-[0.4rem] placeholder:text-[0.8rem] focus:outline-none"
                    required
                  />
                </div>
                <div className="grid">
                  <label htmlFor="" className="text-[#636363] text-[0.9rem]">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your e-mail address"
                    className="border-[#d1d5db] border-[1px] rounded-[5px] px-[1rem] py-[0.4rem] placeholder:text-[0.8rem] focus:outline-none"
                    required
                  />
                </div>
                <div className="grid">
                  <label htmlFor="" className="text-[#636363] text-[0.9rem]">
                    Phone Number
                  </label>
                  <PhoneInput
                    country={"us"}
                    placeholder="Enter Attendee’s Phone Number"
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    className="rounded-[5px] px-[1rem] py-[0.4rem] placeholder:text-[0.8rem] focus:outline-none"
                    required
                    containerStyle={{ padding: "0px" }}
                    inputStyle={{
                      width: "100%",
                      height: "2.5rem",
                      border: "1px solid #d1d5db", 
                    }}
                  />
                </div>

                <h1 className="text-[#5A5A5A] text-[0.8rem] sm:text-[0.5rem] text-center my-[1rem] bg-[#F1F3F6] py-[0.5rem]">
                  I accept the{" "}
                  <a href="" className="text-[#006198]">
                    Terms of Service
                  </a>{" "}
                  and have read the{" "}
                  <a href="" className="text-[#006198]">
                    Privacy Policy
                  </a>
                </h1>
                <div className="bg-white">
                  <span className="flex justify-center gap-[8rem] sm:gap-[4rem]">
                    <h1>
                      Qty: <span className="text-[#3557C2]">{quantity}</span>
                    </h1>
                    <h1>
                      Total: <span className="text-[#3557C2]">NGN {price}</span>
                    </h1>
                  </span>
                  <button
                    onClick={toCheckout}
                    disabled={!email || !fullName || !phone}
                    className="flex items-center gap-[0.4rem] mt-[1rem] px-[8rem] sm:px-[2rem] py-[0.7rem] m-auto bg-[#3557C2] rounded-[5px] text-white font-[500] disabled:bg-[#93c5fd]"
                  >
                    Continue to Checkout{" "}
                    <IoIosArrowForward className="text-[1.2rem]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}