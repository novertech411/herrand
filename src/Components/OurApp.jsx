import Container from "./Container";
import eanr from "../assets/image/earn.png";
import flex from "../assets/image/flexbility.png";
import delivery from "../assets/image/delivery.png";

const OurApp = () => {
  return (
    <div className="">
      <Container>
        <h3 className=" font-poppins  text-center text-black md:text-[38px] text-5xl font-[600] mt-[200px] my-11 ">
          {" "}
          <span className="text-primary"> What </span>You Stand to <br></br>gain
          with
          <span className="text-primary"> Herrands .`</span>{" "}
        </h3>

        <div className=" flex md:justify-between  justify-center md:flex-row  gap-11 flex-col mt-[200px]">
          <div className="md:w-[373px]  w-[330px]  bg-blue-100  px-[40px] py-[70px] rounded-2xl  md:h-[545px] mx-auto ">
            <img className=" mx-auto" src={eanr} alt=" " />

            <div className="text-center font-poppins  text-[20px] my-[30px]">
              <p className=" font-poppins font-[700]"> Earn as you Go</p>
              <p className=" font-[300] mt-[30px]">
                Turn your free time into a source of income by running errands
                for others.
              </p>
            </div>
          </div>

          <div className="md:w-[373px]  w-[330px]  bg-blue-100  px-[40px] pt-[70px] rounded-2xl  md:h-[645px] md:-mt-[60px] mx-auto">
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

          <div className="md:w-[373px]  w-[330px]  bg-blue-100  px-[40px] pt-[70px] rounded-2xl  md:h-[545px] mx-auto ">
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
