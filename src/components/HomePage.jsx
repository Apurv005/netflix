import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        <div className=" relative z-10">
          <div className="flex justify-between w-[80%] m-auto py-5">
            <img
              src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              className="w-40"
            ></img>

            <button
              className="bg-red-700 px-4 py-[6px] rounded-sm text-white self-center text-[15px] cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>
        </div>

        <div className="absolute top-0 left-0 z-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/NZ-en-20250714-TRIFECTA-perspective_061fdcfd-b204-4b07-873c-e16c66403d44_large.jpg"
            className=""
          ></img>
          <div class="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="z-10 relative h-[60vh] w-[100vw] flex items-center justify-center text-white">
          <div className="h-[25vh] w-[80%]">
            <div className=" w-8/12 mx-auto">
              <h1 className="text-6xl text-center font-bold">
                Unlimited movies, TV shows and more
              </h1>
            </div>

            <div className="w-5/12 mx-auto mt-2">
              <p className="text-center">
                Starts at $17.99. Cancel at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
