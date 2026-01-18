import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoginUser } from "../features/AuthSlice";
// import { MyStore } from "../contextApi/MyContext";

const Login = ({ settoggle }) => {
  //  let {regdata,setLogindata} =useContext(MyStore)
 let {loginUserData,regUserData}= useSelector((state)=>(state.auth))
 console.log("loginuser=>",loginUserData)
 let dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

//   let LSDRegData = JSON.parse(localStorage.getItem("regdata"));
  const onSubmit = (data) => {
    console.log("Login Data:", data);
    let loginUser = regUserData.find(
      (elem) => elem.email === data.email && elem.password === data.password
    );
    if (loginUser) {
      localStorage.setItem("logindata", JSON.stringify(data));
       dispatch(setLoginUser(data))
      reset()
      alert("user is logged in");
    } else {
      alert("Invalid Credentials or Register first");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center py-4 lg:py-10 px-4 lg:px-0">
      <div className="w-full max-w-md px-4 lg:px-6">
        {/* Spotify Logo */}
        <div className="flex justify-center mb-4">
          <svg viewBox="0 0 168 168" className="w-8 h-8 lg:w-10 lg:h-10 fill-white">
            <path d="M84 0a84 84 0 1 0 0 168A84 84 0 0 0 84 0zm38.2 121.3c-1.6 2.6-5 3.4-7.6 1.8-20.8-12.7-47-15.6-77.8-8.6-3 .7-6-1.1-6.7-4.1-.7-3 1.1-6 4.1-6.7 33.7-7.7 63.7-4.3 86.6 9.6 2.6 1.6 3.4 5 1.8 7.6zm10.9-24.2c-2 3.2-6.3 4.2-9.5 2.2-23.8-14.6-60-18.8-88.2-10.2-3.6 1.1-7.4-.9-8.5-4.5-1.1-3.6.9-7.4 4.5-8.5 32.3-9.8 72.4-5.1 100 11.8 3.2 2 4.2 6.3 2.2 9.5zm1-25.2c-28.6-17-75.7-18.6-103-10.3-4.2 1.3-8.7-1.1-10-5.3-1.3-4.2 1.1-8.7 5.3-10 31.4-9.5 83.7-7.7 116.7 12.1 3.8 2.3 5 7.2 2.7 11-2.3 3.8-7.2 5-11 2.7z" />
          </svg>
        </div>

        <h1 className="text-white text-3xl lg:text-5xl font-bold text-center mb-4 lg:mb-6">
          Welcome back
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 lg:space-y-4">
          <div>
            <label className="block text-xs lg:text-sm text-white mb-1 font-bold">
              Email or username
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email or username is required",
              })}
              className="w-full  bg-black border border-gray-600 rounded-md px-3 py-2 text-sm lg:text-base text-white focus:outline-none focus:border-white"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {/* Password */}
          <div>
            <label className="text-xs lg:text-sm font-bold text-white block mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="w-full bg-black border border-gray-600 rounded-md px-3 py-2 text-sm lg:text-base text-white focus:outline-none focus:border-white"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#1ed760] hover:bg-[#1fdf64] text-black text-sm lg:text-base font-semibold py-2 lg:py-3 rounded-full transition"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4 lg:my-6">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="px-3 text-gray-400 text-xs lg:text-sm">or</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-2 lg:space-y-3 font-bold">
          {[
            "Continue with phone number",
            "Continue with Google",
            "Continue with Facebook",
            "Continue with Apple",
          ].map((text) => (
            <button
              key={text}
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-600 text-white text-xs lg:text-base py-2 lg:py-3 rounded-full hover:border-white transition"
            >
              {text}
            </button>
          ))}
        </div>

        {/* Sign up */}
        <p className="text-center text-gray-400 text-sm lg:text-md mt-6 lg:mt-8">
          Don&apos;t have an account?{" "}
          <span
            className="text-white text-base lg:text-lg font-semibold transform hover:scale-110 transition duration-300 cursor-pointer"
            onClick={() => {
              settoggle((prev) => !prev);
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
