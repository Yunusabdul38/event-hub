import { FaStar } from "react-icons/fa6";

export default function Label({ children, title,empty,element }) {
  // const labelName =title.split(" ").splice(-1).join()
  return (
    <div className="flex gap-1 lg:gap-3 lg:items-center items-start lg:justify-end flex-col lg:flex-row mx-auto  w-4/5 max-w-lg lg:max-w-none mt-4 relative">
      {element?element:<label className="inline-flex items-center lg:items-start font-normal lg:font-semibold text-base">
        {title}
        <FaStar color="#D6111A" fontSize="10px" className="ml-2 lg:ml-1" />
      </label>}
      {children}
     {empty &&  <p className="text-red-600">{title} is required</p>}
    </div>
  );
}
