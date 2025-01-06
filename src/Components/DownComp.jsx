import { Container } from "react-bootstrap";
import footer1 from "../assets/image/footer1.png";

const DownComp = () => {
  return (
    <div className=" translate-y-[12rem]">
      <Container>
        <div className="   bg-center  bg-cover relative bg-footerbg   overflow-hidden  rounded-2xl md:p-[100px]  py-[100px]  ">
          {/* <img className="absolute z-0 " src={fotbg} alt="" /> */}

          <div className=" ">
            <div className="md:w-[50%] md:ml-[80px] ml-0 w-[90%]  mx-auto font-poppins text-white  ">
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
                <div className="apple-down-bx w-[180px]    ">
                  <div className="for-app-sroid">Download for iOS</div>
                  <img src="images/bad1.png" alt="" />
                </div>
                <div className="apple-down-bx  w-[200px] ">
                  <div className="for-app-sroid">Download for Android</div>
                  <img src="images/bad2.png" alt="" />
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
