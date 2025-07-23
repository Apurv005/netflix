import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);

  function changeForm() {
    setIsLoginScreen(!isLoginScreen);
  }

  return (
    <div>
      <Header />

      <div className="absolute top-0 left-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/NZ-en-20250714-TRIFECTA-perspective_061fdcfd-b204-4b07-873c-e16c66403d44_large.jpg"
          className=""
        ></img>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="z-10 bg-gray-950/75  w-[35vw]  relative mx-auto rounded-sm">
        <div className="w-[80%] mx-auto py-5 text-white">
          <h2 className="text-3xl mb-5">
            {isLoginScreen ? "Sign In" : "Sign up"}
          </h2>
          <form className="flex flex-col">
            {!isLoginScreen && (
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full h-10 text-[1rem] px-2 mb-5 bg-gray-500"
              ></input>
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-10 text-[1rem] px-2 bg-gray-500"
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-10 text-[1rem] px-2 my-5 bg-gray-500"
            ></input>
            {!isLoginScreen && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full h-10 text-[1rem] px-2 bg-gray-500"
              ></input>
            )}
            <button className="bg-red-500 py-2 rounded-sm my-5">
              {isLoginScreen ? "Sign In" : "Sign up"}
            </button>
          </form>
          <p>
            {!isLoginScreen ? "Already have an account!" : "New to Netflix?"}
            <span
              className="underline hover:cursor-pointer"
              onClick={changeForm}
            >
              {!isLoginScreen ? "Sign In" : "Sign up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
