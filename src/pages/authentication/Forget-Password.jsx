import { NavLink } from "react-router-dom";
import { appRoutes } from "../../config/routeMgt/RoutePaths";
import { useState } from "react";

export default function ForgetPassword() {
  return (
    <section className="w-[90%] md:w-1/2 mx-auto border rounded-md p-4 my-20 font-poppins max-w-2xl">
        <h1 className="font-bold">Find Your Account</h1>
        <h3 className="text-base sm:text-lg text-gray-600">Please enter your email address to search for your account</h3>
        <form className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="border py-4 px-2 focus:border-[#3557c2] rounded-md outline-none capitalize" placeholder="example@gmail.com" required/>
          <div className="flex justify-end gap-4">
          <NavLink to={appRoutes.login} className="bg-gray-600 hover:bg-white text-white border-transparent border hover:border-[#3557c2] hover:text-gray-600 p-4 rounded-md inline">cancle</NavLink> 
          <button className="hover:bg-[#3557c2] bg-white text-[#3557c2] hover:text-white p-4 rounded-md capitalize hover:border-transparent border border-[#3557c2]">search</button>
          </div>
        </form>
    </section>
  )
}


export function ResetPassword(){
  const [showPassword, setShowPassword] = useState(true);
  return (
    <section className="w-[90%] md:w-1/2 mx-auto border rounded-md p-4 my-20 font-poppins max-w-2xl">
    <h1 className="font-bold capitalize">reset your password</h1>
    <h3 className="text-base sm:text-lg text-gray-600">Please enter a new password</h3>
    <form className="flex flex-col gap-2">
      <div className="grid gap-3 w-full">
      <label htmlFor="email">Password</label>
      <input  type={!showPassword ? "text" : "password"} id="email" className="border py-4 px-2 focus:border-[#3557c2] rounded-md outline-none capitalize bg-transparent bg-white w-full" required/>
      </div>
      <div className="grid gap-3 w-full">
      <label htmlFor="confirm-email">Confirm Password</label>
      <input  type={!showPassword ? "text" : "password"} id="confirm-email" className="border py-4 px-2 focus:border-[#3557c2] rounded-md outline-none capitalize w-full" required/>
      </div>
      <div className="flex justify-end gap-4">
      <button className="hover:bg-[#3557c2] bg-white text-[#3557c2] hover:text-white p-4 rounded-md capitalize hover:border-transparent border border-[#3557c2]">submit</button>
      </div>
    </form>
</section>
  )
}