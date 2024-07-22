import { AppButton } from "../../../components/button/AppButton"
import CountDown from "../../../components/button/CountDown"
import { MessageOutlined } from "@ant-design/icons";

// RedEnvelopeOutlined, 


function ComingSoon() {
    return (
        <div className="bg-[#F0F0F0] flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 lg:p-20 sm:py-[26px]">
            <div className="lg:w-[50%] sm:w-full p-3">
                <p className="text-[14px] mb-20">Exciting features are on the way! Stay tuned for new tools to enhance your event experience. Our platform will soon offer more ways to connect and engage with your community. Do not miss out... subscribe now to get the latest updates directly to your inbox.
                </p>

                <span className="text-[red]">COMING SOON</span>
                <p className="text-[20px] text-[blue] my-5">Exciting features are on the way! Stay tuned for new tools to enhance your event experience. Our platform will soon offer more ways to connect and engage with your community. Do not miss out... subscribe now to get the latest updates directly to your inbox.
                </p>
                <CountDown duration={14 * 24 * 60 * 60 * 1000} />
            </div>

            <div className="lg:w-[50%] h-full sm:w-full">
                <img src="public/images/newsletter-img.png" alt="picture" className="m-auto mb-5" />

                <div className="bg-white md:w-[80%] m-auto sm:w-[full] p-3 shadow-lg">
                    <p className="font-bold">Get notified when we launch</p>
                    <div className="my-3 flex lg:flex-row md:flex-col justify-between gap-2">
                        <div className=" flex items-center justify-between lg:w-[70%] sm:w-full border-2 outline-none px-3 rounded-md">
                            <MessageOutlined className="text-[orangered] text-[20px]" />
                            {/* <RedEnvelopeOutlined className="text-[orangered] text-[20px]" /> */}
                            <input type="text" placeholder="Email address" className="w-full outline-none px-2" />
                        </div>
                        <AppButton label="Notify me" className="w-[full]" />
                    </div>
                    <span className="text-[10px]">Do not worry, we will not spam your email😉</span>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
