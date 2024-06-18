import { FaStar } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { HiOutlinePlusCircle } from "react-icons/hi2";

export default function CreateEventForm() {
  return (
    <form className="capitalize  lg:px-16 accent-[#aba6da]">
          <div className="lg:w-full max-w-4xl mb-8">
            <h2 className="mb-2 lg:ml-[14.3rem] text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
              Event Details
            </h2>
            <div className="flex gap-1 lg:gap-3 lg:items-center items-start lg:justify-end flex-col lg:flex-row mx-auto  w-4/5 max-w-lg lg:max-w-none mt-4 relative">
              <label className="inline-flex items-center lg:items-start font-normal lg:font-semibold text-base">
                event title{" "}
                <FaStar
                  color="#D6111A"
                  fontSize="10px"
                  className="ml-2 lg:ml-1"
                />
              </label>
              <input
                type="text"
                placeholder="Enter the name of your event"
                className="w-full lg:w-4/5 border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start"
              />
            </div>
            <div className="flex gap-1 lg:gap-3 lg:items-center items-start lg:justify-end flex-col lg:flex-row mx-auto w-4/5 max-w-lg lg:max-w-none mt-4 relative">
              <label className="inline-flex items-center lg:items-start font-normal lg:font-semibold text-base">
                event category{" "}
                <FaStar
                  color="#D6111A"
                  fontSize="10px"
                  className="ml-2 lg:ml-1"
                />
              </label>
              <GoChevronDown className="absolute  top-11 lg:top-4 right-8 sm:right-20 lg:right-4" />
              <select className="w-full lg:w-4/5 border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start appearance-none ">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="lg:w-full max-w-4xl mb-4">
            <h2 className="mb-2 lg:ml-[14.3rem] text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
              date & time
            </h2>
            <div className=" flex gap-[2%] [@media(min-width:360px)]:gap-4  [@media(min-width:430px)]:gap-8 lg:mx-20 px-0 sm:px-11 text-sm">
              <h3 className="sm:flex flex-none inline-flex items-center lg:items-start font-normal lg:font-semibold">
                event types <FaStar color="#D6111A" fontSize="10px" />
              </h3>
              <div className="flex-none sm:flex">
                <input
                  name="eventType"
                  id="single"
                  type="radio"
                  value="single event"
                />
                <label
                  className="font-normal lg:font-semibold ml-1"
                  htmlFor="single"
                >
                  single event
                </label>
              </div>

              <div className="flex-none  sm:flex">
                <input
                  type="radio"
                  name="eventType"
                  id="recurring"
                  value="recurring event"
                />
                <label className="font-normal lg:font-semibold ml-1">
                  recurring event
                </label>
              </div>
            </div>
          </div>
          <div className="max-w-6xl sm:pl-12 lg:pl-[8.5rem] flex-wrap sm:flex-nowrap gap-4 flex justify-between lg:gap-8  px-0  text-sm mb-14">
            <h3 className="hidden lg:flex items-center lg:items-start font-normal lg:font-semibold">
              session(s) <FaStar color="#D6111A" fontSize="10px" />
            </h3>
            <div className="flex gap-1 lg:gap-2 items-start justify-start flex-col relative w-full">
              <label
                htmlFor="date"
                className="inline-flex items-center lg:items-start font-normal lg:font-semibold"
              >
                start date
                <FaStar
                  color="#D6111A"
                  fontSize="10px"
                  className="ml-2 lg:ml-1"
                />
              </label>
              <div className="relative w-full">
                <input
                  type="date"
                  id="date"
                  className="w-full border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start"
                  required
                />
              </div>
            </div>
            <div className="flex gap-1 lg:gap-2 items-start justify-start flex-col relative w-full">
              <label
                htmlFor="date"
                className="inline-flex items-center lg:items-start font-normal lg:font-semibold"
              >
                start date
                <FaStar
                  color="#D6111A"
                  fontSize="10px"
                  className="ml-2 lg:ml-1"
                />
              </label>
              <div className="relative w-full">
                <input
                  type="date"
                  id="date"
                  className="w-full border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-start lg:text-start"
                  required
                />
              </div>
            </div>
            <div className="flex gap-1 lg:gap-2 items-start justify-start flex-col relative w-full">
              <label
                htmlFor="date"
                className="inline-flex items-center lg:items-start font-normal lg:font-semibold"
              >
                start date
                <FaStar
                  color="#D6111A"
                  fontSize="10px"
                  className="ml-2 lg:ml-1"
                />
              </label>
              <div className="relative w-full">
                <input
                  type="date"
                  id="date"
                  className=" w-full border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-start lg:text-start"
                  required
                />
              </div>
            </div>
            <HiOutlinePlusCircle className="hidden sm:block text-6xl w-fit font-normal lg:font-semibold"/>
          </div>
          <div className="lg:w-full max-w-4xl mb-14">
            <h2 className="mb-2 lg:ml-[14.3rem] text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
              location
            </h2>
            <div className="flex gap-1 lg:gap-3 lg:items-center items-start lg:justify-end flex-col lg:flex-row mx-auto w-4/5 max-w-lg lg:max-w-none mt-4 relative">
              <label className="inline-flex text-sm items-center lg:items-start font-normal lg:font-semibold">
                where will your <br className="hidden lg:block"/> event take place?
                <FaStar
                  color="#D6111A"
                  fontSize="10px"
                  className="ml-2 lg:ml-1"
                />
              </label>
              <GoChevronDown className="absolute  top-11 lg:top-4 right-8 sm:right-20 lg:right-4" />
              <select className="w-full lg:w-4/5 border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start appearance-none ">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div className="lg:w-full max-w-6xl mb-14">
            <h2 className="mb-2 lg:ml-[14.3rem] text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
              additional information
            </h2>
            <div  className="sm:pl-12 lg:pl-[5.5rem] flex lg:gap-1  px-0  text-sm mb-14 flex-col lg:flex-row">
              <label className="inline-flex text-sm items-center lg:items-start font-normal lg:font-semibold lg:w-[10.5rem]">
              Event Description
                <FaStar
                  color="#D6111A"
                  fontSize="10px"
                  className="ml-2 lg:ml-1"
                />
              </label>
              <GoChevronDown className="absolute  top-11 lg:top-4 right-8 sm:right-20 lg:right-4" />
             <textarea className="rounded-xl p-4 w-full h-44 border borer-[#828282] text-[#828282] " placeholder="Describe what's special about your event & other important details."/>
            </div>
          </div>
        </form>
  )
}
