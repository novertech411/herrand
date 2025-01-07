import { FaClockRotateLeft } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { FaPeace } from "react-icons/fa";
import Get from "../Components/icons/get.jsx";
import SignUp from "../Components/icons/SignUp.jsx";
import Complet from "../Components/icons/complete.jsx";
import Paid from "../Components/icons/paid.jsx";
import phone from "../assets/image/phone1.png";

const CustomerComp = () => {
  return (
    <div className="about-section-container font-poppins">
      <div className="left-side-about md:flex   hidden ">
        <img src={phone} alt="" />
      </div>
      <div className="md:w-[65%] w-full relative">
        <div className="text-primary md:text-[30px] text-[20px] font-poppins  font-[600] mb-11 md:ml-0  ml-10">
          Turn your time into money in 4 easy steps
        </div>
        <div className=" border-l-2 border-primary flex md:gap-9  gap-1 md:ml-0  ml-10  h-[150px] ">
          <div className=" -translate-x-11 -translate-y-4">
            <SignUp className="" />
          </div>

          <p className="md:text-[25px]  text-[15px] font-poppins m">
            <span className="    font-poppins font-[600]"> Sign Up :</span>
            Download the app, create your profile and complete the verification
            process.
          </p>
        </div>
        <div className=" border-l-2 border-primary flex md:gap-9  gap-1  md:ml-0  ml-10 h-[150px] ">
          <div className=" -translate-x-11 -translate-y-4">
            <Get />
          </div>

          <p className="md:text-[25px]  text-[15px] font-poppins m">
            <span className="    font-poppins font-[600]">Get Notified :</span>
            Receive errand request notifications on your phone and accept the
            ones that best suit you.
          </p>
        </div>
        <div className=" border-l-2 border-primary flex md:gap-9  gap-1 md:ml-0  ml-10 h-[150px] ">
          <div className=" -translate-x-11 -translate-y-4">
            <Complet className="" />
          </div>

          <p className="md:text-[25px]  text-[15px]  font-poppins m">
            <span className="    font-poppins font-[600]">
              {" "}
              Complete Errands :
            </span>
            Run the errands you accept fast and well to improve your ratings and
            get more bookings
          </p>
        </div>
        <div className="  flex md:gap-9  gap-1  h-[150px]  md:ml-0  ml-10 ">
          <div className=" -translate-x-11 -translate-y-4">
            <Paid className="" />
          </div>

          <p className="md:text-[25px]  text-[15px]  font-poppins ">
            <span className="    font-poppins font-[600]"> Get Paid :</span>
            What’s sweeter than credit alerts? Tell us after you receive your
            money directly into your bank account.
          </p>
        </div>

        <div className="button-cont">
          <button className=" border-2 border-primary text-primary p-4 text-[20px] rounded-2xl">
            Become a Runner
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerComp;
