export default function CreateEventPhoto() {
  return (
    <form className="capitalize w-full lg:px-16">
      <h2 className="mb-6 lg:mb-2 text-[#2D2C3C] font-Montserrat text-xl lg:text-2xl font-semibold">
        upload image
      </h2>
      <div className="file:bg-[#EEEEEE] file:font-openSans border borer-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg  p-2.5 placeholder-[#828282] bg-white outline-none w-2/3 lg:mx-0 mx-auto min-w-fit mb-4">
        <input
          className="text-start text-sm border cursor-pointer focus:outline-none border-none file:text-[#1D1D1D] file:font-medium"
          id="file_input"
          type="file"
        />
      </div>
      <div className="text-[#5A5A5A] font-normal">
        <p>
          Feature Image must be at least 1170 pixels wide by 504 pixels high.
        </p>
        <p>Valid file formats: JPG, GIF, PNG.</p>
      </div>
    </form>
  );
}
