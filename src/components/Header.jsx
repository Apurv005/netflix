import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import getErrorMessage from "../utils/getErrorMessage";

const Header = () => {
  const navigate = useNavigate();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Error: " + getErrorMessage(error?.code));
      });
  };

  return (
    <div>
      <div className=" relative z-10">
        <div className="flex justify-between w-[80%] m-auto py-5">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            className="w-50"
          ></img>
          <div className="flex items-center justify-center">
            <p className="text-white cursor-pointer" onClick={signOutUser}>
              Signout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
