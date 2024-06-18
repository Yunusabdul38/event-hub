import { RxCalendar } from "react-icons/rx";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import vector from "../../assets/Vector.svg"

export default function Preview() {
  return (
    <section className="capitalize w-full lg:px-16 pt-6 mx-auto max-w-4xl text-[#2D2C3C]">
    <h2 className="mb-10 lg:mb-2 text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-medium text-center lg:text-start">
    Nearly there! Check everything’s correct.
    </h2>
    <div className="p-6 border-[#2B293D] border-[3px] rounded-2xl my-8">
      <div className="py-10 w-full rounded-md bg-[#B9B9B9]">
        <img src={vector} className="m-auto w-32 h-32" />
      </div>
      <h1 className="my-4 capitalize text-center md:text-start text-2xl font-bold">event title</h1>
      <div className="w-full flex md:flex-row gap-3 md:gap-0 flex-col justify-between items-start">
        <div className="text-sm grid gap-3">
          <h3 className="font-medium text-xl capitalize">date and time</h3>
          <h5 className="flex items-center gap-2"> <RxCalendar/> day date</h5>
          <h5 className="flex items-center gap-2"> <MdOutlineAccessTime/> time</h5>
          <h5 className="ml-5 text-[#4539B4]"> + add to calendar</h5>
        </div>
        <div className="text-sm grid gap-3 h-fit">
          <h3 className="font-medium text-xl">ticket information</h3>
          <h5 className="flex items-center gap-2"> <IoTicket/> Ticket Type: Price /ticket</h5>
        </div>
      </div>
      <div className="mt-8 grid gap-3">
      <h3 className="font-medium text-xl capitalize">location</h3>
      <h5 className="inline-flex text-sm items-center gap-2"> <CiLocationOn/> address</h5>
      <div className="w-full max-w-xl h-80  rounded-md bg-[#B9B9B9] mx-auto lg:mx-0"></div>
      </div>
      <div className="mt-8 grid gap-3">
      <h3 className="font-medium text-xl">hosted by</h3>
      <div className="grid grid-cols-[.5fr_2fr] max-w-64 gap-3">
      <div className="rounded-md bg-[#B9B9B9]" />
      <div className="grid gap-2">
      <h3 className="font-semibold text-sm">Host Name</h3>
      <div className="flex gap-1">
        <button className="capitalize px-3  py-[2px] border">contact</button>
        <button className="capitalize px-3 py-[2px] border">+ follow</button>
      </div>
      </div>
      </div>
      </div>
      <div className="mt-8 grid gap-3">
      <h3 className="font-medium text-xl capitalize">Event Description</h3>
      <p className="text-[#5A5A5A] font-normal text-sm">Lorem ipsum dolor sit amet consectetur. Eget vulputate sociis sit urna sit aliquet. Vivamus facilisis diam libero dolor volutpat diam eu. Quis a id posuere etiam at enim vivamus. Urna nisi malesuada libero enim ornare in viverra. Nibh commodo quis tellus aliquet nibh tristique lobortis id. Consequat ultricies vulputate turpis neque viverra tempor nunc. Et amet massa tellus consequat mauris imperdiet tellus. Praesent risus magna nisl turpis egestas ultrices viverra pellentesque blandit. Rutrum consequat eu penatibus ipsum at. <br/>
      Vestibulum a pharetra facilisis varius proin ultricies tellus. Ac viverra pharetra sit elementum magna nullam ornare in a. Egestas velit id nisi a. Elementum eget vulputate dignissim urna sed tellus felis. Tellus in et sed mattis morbi velit massa donec.</p>
      </div>
    </div>
  </section>
  )
}
