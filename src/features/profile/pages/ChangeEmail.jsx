const ChangeEmail = ({email}) => {
  return (
    <main className="max-w-full mx-auto lg:px-16 md:px-8 px-4">
      <h2 className="text-3xl text-gray-800 font-bold mb-8 border-b border-gray-600 py-2">Change Email </h2>

      <div className="changeEmail max-w-[500px]">
        <p className="font-bold mb-4 text-lg">Current Email: {email}</p>

        <form className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between newEmail">
            <label className="w-[30%]" htmlFor="newEmail">New Email:</label>
            <input className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]" type="email" name="newEmail" id="newEmail" placeholder="Enter new email" />
          </div>
          
          <div className="flex flex-wrap items-center justify-between confirmEmail">
            <label className="w-[30%]" htmlFor="confirmEmail">Confirm Email:</label>
            <input className="w-[70%] text-gray-800 border border-gray-300 px-2 rounded-[8px] h-[45px]" type="email" name="confirmEmail" id="confirmEmail" placeholder="Enter again" />
          </div>
        </form>

        <div className="formBtn max-w-[500px] mx-auto my-8 text-left">
          <button className="bg-[#3557C2]/90 text-white px-8 hover:bg-[#3557C2] transition-all duration-400 py-3 rounded-[8px]">Save My Profile</button>
        </div>
      </div>
    </main>
  )
}

export default ChangeEmail;