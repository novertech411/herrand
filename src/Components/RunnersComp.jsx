import React from "react";
import Get from "../Components/icons/request.jsx";
import SignUp from "../Components/icons/SignUp.jsx";
import Complet from "../Components/icons/track.jsx";
import Paid from "../Components/icons/leave.jsx";
import phone from "../assets/image/sender.png";

function RunnersComp() {
  return (
    <div>
      <div className="about-section-container font-poppins">
        <div className="left-side-about md:flex   hidden ">
          <img src={phone} alt="" />
        </div>
        <div className="md:w-[65%] w-full relative">
          <div className="text-primary md:text-[30px] text-[20px] font-poppins  font-[600] mb-11 md:ml-0  ml-10">
            Enjoy convenience and more free time in 4 easy steps
          </div>
          <div className=" border-l-2 border-primary flex md:gap-9  gap-1 md:ml-0  ml-10  h-[150px] ">
            <div className=" -translate-x-11 -translate-y-4">
              <SignUp className="" />
            </div>

            <p className="md:text-[25px]  text-[15px] font-poppins m">
              <span className="    font-poppins font-[600]"> Sign Up :</span>
              Download the app, create your profile and complete the
              verification process.
            </p>
          </div>
          <div className=" border-l-2 border-primary flex md:gap-9  gap-1  md:ml-0  ml-10 h-[150px] ">
            <div className=" -translate-x-11 -translate-y-4">
              <Get />
            </div>

            <p className="md:text-[25px]  text-[15px] font-poppins m">
              <span className="    font-poppins font-[600]">
                Request Runners :
              </span>
              Post your errand requests by selecting the errand you need help
              with, including details and instructions and request a runner.
            </p>
          </div>
          <div className=" border-l-2 border-primary flex md:gap-9  gap-1 md:ml-0  ml-10 h-[150px] ">
            <div className=" -translate-x-11 -translate-y-4">
              <Complet className="" />
            </div>

            <p className="md:text-[25px]  text-[15px]  font-poppins m">
              <span className="    font-poppins font-[600]">
                {" "}
                Track Progress :
              </span>
              Sit back, relax, and monitor the progress of your errand with your
              dedicated runner while you enjoy convenience and more free time.
            </p>
          </div>
          <div className="  flex md:gap-9  gap-1  h-[150px]  md:ml-0  ml-10 ">
            <div className=" -translate-x-11 -translate-y-4">
              <Paid className="" />
            </div>

            <p className="md:text-[25px]  text-[15px]  font-poppins ">
              <span className="    font-poppins font-[600]">
                Leave Feedback :
              </span>
              After your errand is completed, leave feedback about your
              experience with your runner and our platform to improve our
              community..
            </p>
          </div>

          <div className="button-cont">
            <button
              className=" border-2 border-primary text-primary p-4 text-[20px] rounded-2xl"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.herrands",
                  "_blank"
                )
              }
            >
              Become a Sender
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RunnersComp;
