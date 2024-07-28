import { IoIosRemoveCircleOutline } from "react-icons/io";
import useEvent from "../../hooks/useEvent";

export default function SellingTicket({deleteTicket=false,id}) {
    const {dispatchFn,SellingTicketType} = useEvent()
    const reduceTicket = function () {
        dispatchFn({ type: "ticket/decrease", id });
      };
      const inputValue = (type, value) => {
        dispatchFn({ type: type, value, id });
      };
      const findTicket = SellingTicketType.find(data=> data.id===id)
  return (
    <div className="grid md:grid-cols-[2fr_1fr_.1fr] grid-cols-[2fr_1fr] gap-4">
          <div className="flex gap-1 lg:gap-2 items-start justify-start flex-col relative w-full">
            <label
              htmlFor="ticket-name"
              className="inline-flex items-center lg:items-start font-normal lg:font-semibold"
            >
              ticket name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter the name of your event"
                className="w-full border border-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start"
                required
                onChange={(e)=>{
                    inputValue("event/ticket/name",e.target.value)
                }}
                value={findTicket?.ticketName?.name}
              />
            </div>
          </div>
          <div className="flex gap-1 lg:gap-2 items-start justify-start flex-col relative w-full">
            <label
              htmlFor="ticket-price"
              className="inline-flex items-center lg:items-start font-normal lg:font-semibold"
            >
              ticket price
            </label>
            <div className="relative w-full">
              <input
                type="number"
                id="ticket-price"
                className="w-full border border-[#828282] text-[#828282] text-sm rounded-xl lg:rounded-lg focus:ring-[#828282] focus:border-[#828282] block p-2.5 placeholder-[#828282] bg-white outline-none text-center lg:text-start"
                onChange={(e)=>{
                    inputValue("event/ticket/price",e.target.value)
                }}
                value={findTicket?.ticketPrice.price}
                required
              />
            </div>
          </div>
          <button disabled={!deleteTicket} onClick={reduceTicket} type="button">
        <IoIosRemoveCircleOutline
          className={`${!deleteTicket ? "invisible" : "visible"} text-2xl`}
        />
      </button>
        </div>
  );
}
