import { AppButton } from "../../components/button/AppButton"
import { Link } from "react-router-dom";
import { appRoutes } from "../../config/routeMgt/RoutePaths";
import AuthenticationDetails from "../../components/button/AuthenticationDetails";
import AuthenticationForm from "../../components/button/AuthenticationForm"
import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined, ArrowRightOutlined, GoogleOutlined } from "@ant-design/icons";

const LogIn = () => {

  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "name is required"
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required!"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email formart not valid!"
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required!"
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password must be longer than 8 charracters!"
    }

    setErrors(validationErrors)

    // if (Object.keys(validationErrors).length === 0) {
    //   alert("Form Submitted Successfuly")
    // }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  return (
    <div className="bg-[#F0F0F0] flex flex-wrap lg:flex-nowrap justify-between items-center lg:p-10 sm:p-5 gap-10 text-[14px]" >
      <AuthenticationDetails>
        <div className="p-3">
          <h1 className="py-3 text-[20px] font-bold">Event Hub</h1>
          <p>
            Welcome to our community event platform! Easily discover and join events that match your interests. Whether you are looking to connect with others, learn new skills, or simply have fun, we have something for everyone. Our user-friendly interface makes it simple to find, create, and manage events. Join us today and be part of a vibrant community!
          </p>
        </div>
        <div className="bg-white border-2 rounded-lg mt-10">
          <div className="p-3">
            <p>
              Hi, I am Mercy Ayomide, a passionate community member eager to connect and collaborate on events. My journey in event management started with a deep love for bringing people together and creating unforgettable experiences. I enjoy exploring new ideas and making every event special. Feel free to reach out to me via email or phone for any inquiries or collaboration opportunities. Looking forward to connecting with you!
            </p>
          </div>
          <div className="border-t-2 p-4 flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">
              <img src="public/images/profile-img.jpg" alt="picture" className="w-[50px] rounded-md" />
              <span>Peter. V</span>
            </div>
          </div>
        </div>
      </AuthenticationDetails>
      <AuthenticationForm>
        <form onSubmit={handleSubmit} >
          <div>
            <h1 className="text-center text-[20px] font-bold">Login</h1>
            <p className="text-center font-semibold py-5">Welcome back! Please log in to access your account.</p>
            <label htmlFor="email" className="block">
              {!errors.email ? <span>Email</span> : <span className="my-13 text-[red]">{errors.email}</span>}
            </label>
            <input type="text" name="email" placeholder="Enter Email"
              className="border-2 outline-none rounded-md w-full p-3 mb-3"
              onChange={handleChange}
            />
          </div>

          <label htmlFor="password" className="block">
            {!errors.password ? <span>Password</span> : <span className="my-13 text-[red]">{errors.password}</span>}
          </label>
          <div className="flex flex-row items-center justify-between gap-3 pr-3 mb-3 border-2 rounded-md w-full">
            <input
              className="p-3 w-full outline-none"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
            <div className="p-1" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </div>
          </div>

          <Link to={appRoutes.reset_password}>
            <p className="text-right text-[blue] my-3">Forgot Password?</p>
          </Link>
          <div className="w-full">
            <div className="mb-3 flex flex-row gap-3"><p>Remember me</p><input type="checkbox" /></div>
            <AppButton type="submit" label="Login" />
            <Link to={appRoutes.login}>
              <p className="border-2 p-3 my-4 text-center font-semibold rounded-md"><GoogleOutlined className="cursor-pointer text-[20px] text-[orangered]" /> Login with Google </p>
            </Link>
            <p className="text-center">Don&apos;t have an account? <Link to={appRoutes.sign_up}>
              <span className="font-semibold">Sign up<ArrowRightOutlined /></span></Link></p>
          </div>
        </form>
      </AuthenticationForm>
    </div>
  )
}

export default LogIn