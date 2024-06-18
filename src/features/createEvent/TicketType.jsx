import { IoTicketOutline } from "react-icons/io5";
import { HiOutlinePlusCircle } from "react-icons/hi2";

export default function TicketType() {
  return (
    <form className="capitalize w-full lg:px-16 pt-6">
      <div className="max-w-3xl mb-8">
        <h2 className="mb-6 lg:mb-2 text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-medium">
          what type of event are you running?
        </h2>
        <div className="grid gap-2 lg:gap-10 grid-cols-2">
          <div className="flex flex-col items-center border-[#828282] border rounded-xl p-4">
            <IoTicketOutline className="text-8xl font-thin" />
            <h3 className="capitalize">Ticketed Event</h3>
            <h4>My event requires tickets for entry</h4>
          </div>
          <div className="flex flex-col items-center border-[#828282] border rounded-xl p-4">
            <IoTicketOutline className="text-8xl font-thin" />
            <h3 className="capitalize">Ticketed Event</h3>
            <h4>My event requires tickets for entry</h4>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mb-8 relative">
        <h2 className="text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-medium mb-8">
          what tickets are you selling
        </h2>
        <div className="grid md:grid-cols-[2fr_1fr_.1fr] grid-cols-[2fr_1fr] gap-4">
          <div className="flex gap-1 lg:gap-2 items-start justify-start flex-col relative w-full">
            <label
              htmlFor="ticket-name"
              className="inline-flex items-center lg:items-start font-normal lg:font-semibold"
            >
              ticket name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter the name of your event"
                className="w-full border border-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start"
              />
            </div>
          </div>
          <div className="flex gap-1 lg:gap-2 items-start justify-start flex-col relative w-full">
            <label
              htmlFor="ticket-price"
              className="inline-flex items-center lg:items-start font-normal lg:font-semibold"
            >
              ticket price
            </label>
            <div className="relative w-full">
              <input
                type="number"
                id="ticket-price"
                className="w-full border border-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start"
                required
              />
            </div>
          </div>
          <HiOutlinePlusCircle className="text-2xl font-normal lg:font-semibold md:relative absolute top-0 right-0" />
        </div>
      </div>
    </form>
  );
}
