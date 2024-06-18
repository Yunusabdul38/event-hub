export default function Progress() {
  return (
    <div className="z-0 mt-4 capitalize">
      <span className="w-full inline-block  h-[2px] bg-[#6F6F6F]"></span>
      <div className="flex justify-evenly">
        <div className="relative flex flex-col items-center -top-[15px]">
          <span className="w-4 h-4 rounded-full bg-white border-solid border-[#6F6F6F] border-4"></span>
          <span>edit</span>
        </div>
        <div className="relative flex flex-col items-center -top-[15px]">
          <span className="w-4 h-4 rounded-full bg-white border-solid border-[#6F6F6F] border-4"></span>
          <span>banner</span>
        </div>
        <div className="relative flex flex-col items-center -top-[15px]">
          <span className="w-4 h-4 rounded-full bg-white border-solid border-[#6F6F6F] border-4"></span>
          <span>Ticketing</span>
        </div>
        <div className="relative flex flex-col items-center -top-[15px]">
          <span className="w-4 h-4 rounded-full bg-white border-solid border-[#6F6F6F] border-4"></span>
          <span>review</span>
        </div>
      </div>
    </div>
  );
}
