import { AppButton } from "../../components/button/AppButton"
import { Link } from "react-router-dom";
import { appRoutes } from "../../config/routeMgt/RoutePaths";
import AuthenticationDetails from "../../components/button/AuthenticationDetails";
import AuthenticationForm from "../../components/button/AuthenticationForm"
import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined, ArrowRightOutlined, GoogleOutlined } from "@ant-design/icons";


const SignUp = () => {

  const [errors, setErrors] = useState({})

  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    check: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required!"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email formart not valid!"
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required!"
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 charracters long!"
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match!"
    }

    if (!formData.check.trim()) {
      validationErrors.check = "Please agree with our terms of use!"
    }

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfuly")
      setFormData({})
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  return (
    <div className="bg-[#F0F0F0] w-full flex flex-wrap lg:flex-nowrap justify-between items-center  lg:p-10 sm:p-5 gap-10 text-[14px]" >
      <AuthenticationDetails>
        <div className="p-3">
          <h1 className="py-3 text-[20px] font-bold">Event Hub</h1>
          <p>
            Welcome to our community event platform! Easily discover and join events that match your interests. Whether you are looking to connect with others, learn new skills, or simply have fun, we have something for everyone. Our user-friendly interface makes it simple to find, create, and manage events. Join us today and be part of a vibrant community!
          </p>
          {/* <img src="public/images/e-hub.jpg" alt="e-hub" /> */}
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
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-center text-[20px] font-bold">Sign Up</h1>
            <p className="text-center font-semibold py-5">
              Create an account to unlock exclusive features.</p>

            <label htmlFor="text" className="block">
              {!errors.name ? <span>Name</span> : <span className="my-13 text-[red]">{errors.name}</span>}
            </label>
            <input type="text" name="name" placeholder="Full name"
              className="border-2 outline-none rounded-md w-full p-3 mb-3"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              {!errors.email ? <span>Email</span> : <span className="my-13 text-[red]">{errors.email}</span>}
            </label>
            <input type="text" name="email" placeholder="Enter email"
              className="border-2 outline-none rounded-md w-full p-3 mb-3"
              onChange={handleChange}
            />
          </div>

          <label htmlFor="password" className="block">
            {!errors.password ? <p>Password <span className="text-[grey] font-light italic">(minimum of 8 charracters)</span></p> : <span className="my-13 text-[red]">{errors.password}</span>}
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

          <label htmlFor="password" className="block">
            {!errors.confirmPassword ? <span>Confirm password</span> : <span className="my-13 text-[red]">{errors.confirmPassword}</span>}
          </label>
          <div className="flex flex-row items-center justify-between gap-3 pr-3 mb-3 border-2 rounded-md w-full">
            <input
              className="p-3 w-full outline-none"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Confirm password"
              onChange={handleChange}
            />
            <div className="p-1" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </div>
          </div>

          <div className="w-full">
            <div className="flex gap-2 my-3 sm:text-[12px]">
              <input type="checkbox" name="check" onChange={handleChange} />
              <div>{!errors.check ? <p className="text-[12px]">I agree with the <a href="#" className="underline text-[blue]">Terms of Use</a> and <a href="#" className="underline text-[blue]">Privacy Policy</a></p> : <span className="my-13 text-[red] block">{errors.check}</span>}</div>
            </div>

            <AppButton type="submit" label="Sign up" />
            <Link to={appRoutes.sign_up}>
              <p className="border-2 p-3 my-4 text-center font-semibold rounded-md">
                <GoogleOutlined className="cursor-pointer text-[20px] text-[orangered]" />
                Sign Up with Google </p>
            </Link>
            <p className="text-center">Already have an account? <Link to={appRoutes.login}>
              <span className="font-semibold">LogIn<ArrowRightOutlined /></span></Link></p>
          </div>
        </form>
      </AuthenticationForm>
    </div>
  )
}

export default SignUp