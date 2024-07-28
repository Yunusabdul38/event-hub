import { IoIosArrowRoundBack } from "react-icons/io";
import { Outlet, useNavigate } from "react-router-dom";
import Progress from "./Progress";
import CreateEventContextProvider from "../../stateManagement/CreateEventContex";

export default function CreateEvent() {
  const navigate = useNavigate();
  function oneClickBack() {
    navigate(-1);
  }
  return (
    <CreateEventContextProvider>
      <section className="px-5 font-openSans max-w-7xl m-auto py-5">
        <div className="inline-flex items-center gap-2 text-xl lg:text-2xl text-[##2D2C3C] font-extrabold">
          <IoIosArrowRoundBack
            color="#2B293D"
            className="text-3xl lg:text-4xl"
            onClick={oneClickBack}
          />
          <h2>Create a New Event</h2>
        </div>
        <div className="px-0 sm:px-9 lg:px-0">
          <Progress />
          <Outlet />
        </div>
      </section>
    </CreateEventContextProvider>
  );
}
