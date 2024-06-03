const NavBar = () => {
  return (
    <div className="flex sticky top-0 bg-white">
      <div className="flex flex-col w-full">
        <div className="py-5 flex pl-11">
          <span style={{ fontFamily: "cursive" }} className="text-[var(--app-blue)] text-xl font-semibold">
            Logo
          </span>

          {/* category search */}
          <div></div>
        </div>

        {/* main nav area */}
        <div className="py-10 pl-11 w-full border-t border-t-[var(--app-grey)] relative flex ">
          <nav className=" flex  w-1/2 justify-between max-w-full absolute top-0 bottom-0 ">
            <p className="border-t border-t-orange-700  pt-5">Home</p>
            <p>Find Events</p>
            <p>Create Events</p>
            <p>Help Center</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </nav>
        </div>
      </div>

      {/* sign up & login */}
      <div className="mt-5 pr-11"></div>
    </div>
  );
};

export default NavBar;
