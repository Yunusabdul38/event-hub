import { AppButton } from "../../../components/button/AppButton";
import CountDown from "../../../components/button/CountDown";
import { TfiEmail } from "react-icons/tfi";

function ComingSoon() {
  return (
    <div className="max-w-6xl m-auto px-5 sm-screen:px-20 py-10">
        <div className="flex justify-between bg-white">
          <div className="w-full">
          <div className="grid gap-3">
            <p className="text-base text-[#59595A]">
              Exciting features are on the way! Stay tuned for new tools to enhance
              your event experience. Our platform will soon offer more ways to
              connect and engage with your community. Do not miss out... subscribe
              now to get the latest updates directly to your inbox.
            </p>
            <div>
                <span className="text-[#FF6636]">COMING SOON</span>
                <p className="text-xl text-[#17337C] font-medium font-inter">
                  Exciting features are on the way! <br/> Stay tuned for new tools to enhance
                  your event experience. <br/> Our platform will soon offer more ways to
                  connect and engage with your community. Do not miss out... subscribe
                  now to get the latest updates directly to your inbox.
                </p>
            </div>
          </div>
          </div>
          <div className="bg-comming_soon w-full sticky  sm-screen:bg-cover xl-screen:bg-contain bg-no-repeat bg-top border border-red-500 sm-screen:block hidden" />
        </div>
        <div className="flex flex-col md-screen:flex-row gap-10 bg-comming_soon bg-auto bg-no-repeat bg-center sm-screen:bg-none">
          <CountDown duration={14 * 24 * 60 * 60 * 1000} />
          <>
            <div className="shadow-lg w-full p-5 flex flex-col items-center md-screen:items-center sm-screen:items-start max-w-2xl gap-2 px-3">
              <p className="font-bold text-center md-screen:text-start">Get notified when we launch</p>
              <div className="flex min-[800px]:flex-row flex-col justify-between gap-2 w-full">
                <div className="flex items-center justify-between w-full rounded-md relative">
                  <TfiEmail className="text-[orangered] text-base absolute left-3 md-screen:top-3 top-[10px]" />
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-full md-screen:w-[80%] outline-none pr-2 pl-8 py-2"
                  />
                </div>
                <AppButton label="Notify me" containerStyle={"w-full min-[800px]:w-1/2 rounded border-none"}/>
              </div>
              <span className="text-base">
                Do not worry, we will not spam your email😉
              </span>
            </div>
          </>
      </div>
    </div>
  );
}

export default ComingSoon;
