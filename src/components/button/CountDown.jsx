import { useState, useEffect } from "react"
// eslint-disable-next-line react/prop-types, no-unused-vars
function CountDown({ duration }) {
    const [time, setTime] = useState(duration)

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000)
        }, 1000)
    }, [time])

    const getFormatedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000))
        let total_minutes = parseInt(Math.floor(total_seconds / 60))
        let total_hours = parseInt(Math.floor(total_minutes / 60))
        let days = parseInt(Math.floor(total_hours / 24))

        let seconds = parseInt(total_seconds % 60)
        let minutes = parseInt(total_minutes % 60)
        let hours = parseInt(total_hours % 24)

        return (
            <>
                {/* <div
                    className="w-[60%] m-auto grid grid-cols-4 justify-between text-center">
                    <div className="col-span-[1 / 1] font-bold text-[20px] bg-gray-300 p-2">{days}</div>
                    <div className="col-span-[2 / 2] font-bold text-[20px] bg-gray-300 p-2">{hours}</div>
                    <div className="col-span-[3 / 3] font-bold text-[20px] bg-gray-300 p-2">{minutes}</div>
                    <div className="col-span-[4 / 4] font-bold text-[20px] bg-gray-300 p-2">{seconds}</div>
                    <div className="bg-gray-300 p-2">Days</div>
                    <div className="bg-gray-300 p-2">Hours</div>
                    <div className="bg-gray-300 p-2">Minutes</div>
                    <div className="bg-gray-300 p-2">Seconds</div>
                </div> */}
                <div className="flex flex-row gap-4 justify-center items-center text-center">
                    <div>
                        <div className="bg-gray-100 p-3 font-bold text-[20px]">{days}</div>
                        <span className="bg-gray-100 p-3">Days</span>
                    </div>
                    <div>
                        <div className="bg-gray-100 p-3 font-bold text-[20px]">{hours}</div>
                        <span className="bg-gray-100 p-3">Hours</span>
                    </div>
                    <div>
                        <div className="bg-gray-100 p-3 font-bold text-[20px]">{minutes}</div>
                        <span className="bg-gray-100 p-3">Mins</span>
                    </div>
                    <div>
                        <div className="bg-gray-100 p-3 font-bold text-[20px]">{seconds}</div>
                        <span className="bg-gray-100 p-3">Secs</span>
                    </div>

                </div>
            </>
        )
    }
    return (
        <div className="w-full flex justify-center">
            {getFormatedTime(time)}
        </div>
    )
}

export default CountDown
