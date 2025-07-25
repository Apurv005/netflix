import { useRef, useState } from "react";
import Header from "./Header";
import { validateUserIntput } from "../utils/userInputValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import getErrorMessage from "../utils/getErrorMessage";

const Login = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  let userNameRef = useRef(null);
  let userEmailRef = useRef(null);
  let userPasswordRef = useRef(null);
  let userConfirmPasswordRef = useRef(null);

  function signInOrSignUpUser(e) {
    e.preventDefault();
    const returnObj = isLoginScreen
      ? validateUserIntput(
          userEmailRef.current.value,
          userPasswordRef.current.value
        )
      : validateUserIntput(
          userEmailRef.current.value,
          userPasswordRef.current.value,
          userConfirmPasswordRef.current.value
        );

    console.log("re:", returnObj.status);

    if (!returnObj.status) setErrorMsg("Error: " + returnObj.message);
    else {
      setErrorMsg("");
      if (isLoginScreen) {
        signInWithEmailAndPassword(
          auth,
          userEmailRef.current.value,
          userPasswordRef.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            setErrorMsg("Error: " + getErrorMessage(error?.code));
          });
      } else {
        createUserWithEmailAndPassword(
          auth,
          userEmailRef.current.value,
          userPasswordRef.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            setErrorMsg("Error: " + getErrorMessage(error?.code));
          });
      }
    }
  }

  function changeForm() {
    setIsLoginScreen(!isLoginScreen);
    setErrorMsg("");
  }

  return (
    <div>
      <Header />

      <div className="absolute top-0 left-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/NZ-en-20250714-TRIFECTA-perspective_061fdcfd-b204-4b07-873c-e16c66403d44_large.jpg"
          className=""
        ></img>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="z-10 bg-gray-950/75  w-[35vw]  relative mx-auto rounded-sm">
        <div className="w-[80%] mx-auto py-5 text-white">
          <h2 className="text-3xl mb-5">
            {isLoginScreen ? "Sign In" : "Sign up"}
          </h2>
          <form className="flex flex-col" onSubmit={signInOrSignUpUser}>
            {!isLoginScreen && (
              <input
                ref={userNameRef}
                type="text"
                placeholder="Enter Name"
                className="w-full h-10 text-[1rem] px-2 mb-5 bg-gray-500"
              ></input>
            )}
            <input
              ref={userEmailRef}
              type="email"
              placeholder="Email Address"
              className="w-full h-10 text-[1rem] px-2 bg-gray-500"
            ></input>
            <input
              ref={userPasswordRef}
              type="password"
              placeholder="Password"
              className="w-full h-10 text-[1rem] px-2 my-5 bg-gray-500"
            ></input>
            {!isLoginScreen && (
              <input
                required
                ref={userConfirmPasswordRef}
                type="password"
                placeholder="Confirm Password"
                className="w-full h-10 text-[1rem] px-2 bg-gray-500"
              ></input>
            )}
            <button className="bg-red-500 py-2 rounded-sm my-5" type="submit">
              {isLoginScreen ? "Sign In" : "Sign up"}
            </button>
          </form>
          <p className="text-red-600">{errorMsg}</p>
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
