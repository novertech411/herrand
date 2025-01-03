import Container from "./Container";
import eanr from "../assets/image/earn.png";
import flex from "../assets/image/flexbility.png";
import delivery from "../assets/image/delivery.png";

const OurApp = () => {
  return (
    <div className="">
      <Container>
        <h3 className=" font-poppins text-center text-black text-[38px] font-[500] mt-[200px] my-11 ">
          {" "}
          What You Stand to gain with Herrands{" "}
        </h3>

        <div className=" flex justify-between  mt-[200px]">
          <div className="w-[373px]  bg-blue-100  px-[40px] py-[70px] rounded-2xl  h-[545px] ">
            <img className=" mx-auto" src={eanr} alt=" " />

            <div className="text-center font-poppins  text-[20px] my-[30px]">
              <p className=" font-poppins font-[700]"> Earn as you Go</p>
              <p className=" font-[300] mt-[30px]">
                Turn your free time into a source of income by running errands
                for others.
              </p>
            </div>
          </div>

          <div className="w-[373px]  bg-blue-100  px-[40px] pt-[70px] rounded-2xl  h-[645px] -mt-[60px]">
            <img className=" mx-auto" src={flex} alt=" " />

            <div className="text-center font-poppins  text-[20px] my-[30px]">
              <p className=" font-poppins font-[700]"> Flexible Hours</p>
              <p className=" font-[300] mt-[30px]">
                Work on your schedule and choose errands that suit you. Whether
                you're looking for a full-time gig or part-time hustle, we offer
                flexible opportunities to fit your schedule.
              </p>
            </div>
          </div>

          <div className="w-[373px]  bg-blue-100  px-[40px] pt-[70px] rounded-2xl  h-[545px] ">
            <img className=" mx-auto" src={delivery} alt=" " />

            <div className="text-center font-poppins  text-[20px] my-[30px]">
              <p className=" font-poppins font-[700]"> Make a Differnece</p>
              <p className=" font-[300] mt-[30px]">
                Make a positive impact by helping other people save time, reduce
                stress and enjoy more convenience.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurApp;
