import { Container } from "react-bootstrap";
import footer1 from "../assets/image/footer1.png";
import React, { useState } from "react";
import adriod from "../assets/image/andriod.png";
import apple from "../assets/image/appel.png";

const DownComp = () => {
  const [isComingSoonVisible, setComingSoonVisible] = useState(false);
  const handleParentClick = () => {
    setComingSoonVisible(true);
    // Optional: Hide after a delay (e.g., 3 seconds)
    setTimeout(() => setComingSoonVisible(false), 3000);
  };

  return (
    <div className=" translate-y-[12rem]">
      <Container>
        <div className="   bg-center  bg-cover relative bg-footerbg   overflow-hidden  rounded-2xl md:p-[100px]  py-[100px]  ">
          {/* <img className="absolute z-0 " src={fotbg} alt="" /> */}

          <div className=" ">
            <div className="md:w-[50%] ml-1 w-[90%]  md:mx-1  font-poppins text-white    ">
              <div className=" text-[20px]">
                Ready to make time for what matters most to you? Need more time
                to focus on your goals? Or you want to convert your time into
                money?
              </div>

              <div className="  text-[40px] font-[700]">
                Download Herrands Now!
              </div>
            </div>
            <div className=" ">
              <div className=" md:w-full  mx-auto w-[90%] flex   md:flex-row flex-col text-white text-[18px] gap-4  md:ml-[80px] mt-10 ">
                <div
                  className="apple-down-bx w-[180px]     "
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.herrands",
                      "_blank"
                    )
                  }
                >
                  <div className="for-app-sroid  mb-11">
                    Download for Android{" "}
                  </div>
                  <img src={adriod} alt="" />
                </div>
                <div className="apple-down-bx  w-[170px]  ">
                  <div className="for-app-sroid mb-11">Download for iOS</div>
                  <div className="relative" onClick={handleParentClick}>
                    {" "}
                    <img src={apple} alt="" />
                    <div
                      className={`absolute bg-blue-100 text-primary py-2   px-2 rounded-lg -top-8 -right-11 font-poppins text-[12px] font-[500]   transition-transform duration-300 ease-out 
          ${
            isComingSoonVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }  `}
                    >
                      {" "}
                      Coming Soon...
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="   w-[40%]">
              <img
                className="absolute   w-[25%] right-0 bottom-0"
                src={footer1}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DownComp;
