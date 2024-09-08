import CountDown from "./button/CountDown";
import { TfiEmail } from "react-icons/tfi";
import img from "../assets/Saly-2.svg";
function ComingSoon() {
  return (
    <section className="bg-[#F0F0F0] p-5">
      <div className="max-w-6xl m-auto px-5 sm:px-2 py-10 relative">
        <p className="text-base text-[#59595A] xl:w-2/3 md:w-3/4 w-full">
          Exciting features are on the way! Stay tuned for new tools to enhance
          your event experience. Our platform will soon offer more ways to
          connect and engage with your community. Do not miss out... subscribe
          now to get the latest updates directly to your inbox.
        </p>
        <div>
          <section className="flex justify-between items-center gap-3 max-w-6xl">
            <div>
              <span className="text-[#FF6636]">COMING SOON</span>
              <p className="text-xl text-[#17337C] font-medium font-inter">
                Exciting features are on the way! <br /> Stay tuned for new
                tools to enhance your event experience. <br /> Our platform will
                soon offer more ways to connect and engage with your community.
                Do not miss out... subscribe now to get the latest updates
                directly to your inbox.
              </p>
            </div>
            <img
              src={img}
              className=" w-full sticky  sm:bg-cover xl:bg-contain bg-top md:block hidden object-contain min-w-[400px]"
            />
          </section>
        </div>

        <div className="flex flex-col md:flex-row gap-10  min-[1000px]:absolute bottom-0 w-full min-[1000px]:z-0">
          <CountDown duration={14 * 24 * 60 * 60 * 1000} />
          <>
            <div className="shadow-lg w-full p-5 flex flex-col items-center md:items-center sm:items-start max-w-2xl gap-2 px-3 bg-white">
              <p className="font-bold text-center md:text-start">
                Get notified when we launch
              </p>
              <div className="flex min-[800px]:flex-row flex-col justify-between gap-2 w-full">
                <span className="flex items-center justify-between relative w-full">
                  <TfiEmail className="text-[orangered] text-base absolute left-3 md:top-[11px] xl:top-3 top-[10px]" />
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full outline-none pr-2 pl-8 py-2 border rounded"
                  />
                </span>
                <button className="hover:bg-[#17337C] bg-[#3557C2] border-none capitalize text-white font-openSans font-semibold w-full xl:w-1/2 outline-none py-2 cursor-pointer rounded">
                  notify me
                </button>
              </div>
              <span className="text-base">
                Do not worry, we will not spam your email😉
              </span>
            </div>
          </>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
