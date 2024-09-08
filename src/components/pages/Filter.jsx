
export default function Filter({showFilter}) {

  return (
    <>
      <div
        className={`${
          showFilter
            ? "flex h-fit flex-col p-10 absolute md:relative w-fit bg-white md:z-0 z-10 overflow-hidden overflow-y-hidden"
            : "hidden"
        } md:block md:w-fit md:pr-24 m:pl-0 md:overflow-y-scroll overflow-x-hidden md:h-screen`}
      >
        <div className="mt-[1.5rem]">
          <h1 className="text-[1.1rem] font-[500] mb-[1rem]">Price</h1>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Free</h1>
          </div>
          <div className="flex gap-[0.4rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Paid</h1>
          </div>
          <hr className="mt-[2rem]" />
        </div>
        <div className="mt-[1.5rem]">
          <h1 className="text-[1.1rem] font-[500] mb-[1rem]">Date</h1>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Today</h1>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">This Week</h1>
          </div>
          <div className="flex gap-1 w-fit mb-[0.5rem]">
            <input type="checkbox" className=" border-[#2D2C3C]" />
            <label className="font-medium text-xs">This Weekend</label>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <label className="font-[300] text-[0.8rem]">Pick A Date</label>
          </div>
          <a href="">
            <p className="text-[0.9rem] font-[300] text-[#4539B4]">More</p>
          </a>
          <hr className="mt-[2rem]" />
        </div>
        <div className="mt-[1.5rem]">
          <h1 className="text-[1.1rem] font-[500] mb-[1rem]">Category</h1>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Adventure Travel</h1>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Art Exhibitions</h1>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Auctions & Fundraisers</h1>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Beer Festivals</h1>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Benefit Concerts</h1>
          </div>
          <a href="">
            <p className="text-[0.9rem] font-[300] text-[#4539B4]">More</p>
          </a>
          <hr className="mt-[2rem]" />
        </div>
        <div className="mt-[1.5rem]">
          <h1 className="text-[1.1rem] font-[500] mb-[1rem]">Format</h1>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Community Engagement</h1>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">
              Concerts & Performances
            </h1>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Conferences</h1>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Experiential Events</h1>
          </div>
          <div className="flex gap-[0.4rem] mb-[0.5rem]">
            <input type="checkbox" className="w-[1rem] border-[#2D2C3C]" />
            <h1 className="font-[300] text-[0.8rem]">Festivals & Fairs</h1>
          </div>
          <a href="">
            <p className="text-[0.9rem] font-[300] text-[#4539B4]">More</p>
          </a>
          <hr className="mt-[2rem]" />
        </div>
      </div>

      <div className="h-[130vh] border-[0.1px] border-[#d1d5db] md:hidden"></div>
    </>
  );
}
