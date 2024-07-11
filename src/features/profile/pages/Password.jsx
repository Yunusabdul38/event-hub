const Password = () => {
  return (
    <main className="max-w-full mx-auto lg:px-16 md:px-8 px-4">
      <h2 className="text-3xl text-gray-800 font-bold mb-8 border-b border-gray-600 py-2">Set Password</h2>

      <div className="changeEmail max-w-[500px]">
        <p>A password has not been set for your account </p>

        <div className="formBtn max-w-[500px] mx-auto my-8 text-left">
          <button className="bg-[#3557C2]/90 text-white px-8 hover:bg-[#3557C2] transition-all duration-400 py-3 rounded-[8px]">Set Password</button>
        </div>
      </div>
    </main>
  )
}

export default Password;