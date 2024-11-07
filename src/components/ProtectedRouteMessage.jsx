import { Link } from "react-router-dom";
import Modal from "./Modal";
import { appRoutes } from "../config/routeMgt/RoutePaths";
import { useState } from "react";

function ProtectedRouteMessage() {
  return (
   <Modal>
     <div className="bg-white px-4 w-11/12 text-center md:w-1/2 py-10 flex flex-col justify-center items-center rounded-lg">
      <div>
        <h1 className="text-xl md:text-[1.5rem] font-normal">
          You are not authorized to access this page.
        </h1>
        <p>To access this feature, please ensure you're logged in with an authorized account. If you're having trouble, <br/> feel free to reach out to our support team.</p>
        <div className="flex items-center justify-evenly md:justify-center md:gap-3 my-4 w-full">
        <Link className="bg-[#3557c2] capitalize py-1 px-2 rounded-md text-white" to={appRoutes.home} >Home</Link>   
        <Link className="bg-[#3557c2] capitalize py-1 px-2 rounded-md text-white" to={appRoutes.login} >sign in</Link>
        </div>
      </div>
    </div>
   </Modal>
  );
}

export default ProtectedRouteMessage