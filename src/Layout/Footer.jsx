import { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTiktok } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/image/logoherr.png";
import Linkedin from "../Components/icons/Linkedin";
import Facebook from "../Components/icons/Facebook";
import Instgarm from "../Components/icons/Instgarm";
import { Container } from "react-bootstrap";

const Footer = ({ handleTermsOpenClick, handlePrivacyOpenClick }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className=" bg-footerbg2  bg-cover pt-[200px] ">
      <Container>
        <div className=" font-poppins" id="footer">
          <div className="flex text-[20px] text-white  justify-evenly  gap-11   md:flex-row flex-col     ">
            <div className="w-[350px]">
              <div className="bg-white rounded-xl p-3 flex-wrap  w-[200px] mb-7">
                {" "}
                <img className="  " src={logo} alt="" />{" "}
              </div>

              <p> Save time. Earn Money. Live Better</p>

              <p className="mt-[80px]">
                Are you looking for a flexible way to earn extra income? Join
                Herrands as a runner!
              </p>
            </div>
            <div className="w-[200px] text-[20px]">
              <h2 className=" font-poppins  font-[600px] text-[25px] mb-7">
                Company{" "}
              </h2>
              <p>Terms of Services</p>
              <p>Guides for Runners</p>
              <p>Safety for Runners</p>
              <p>Privacy Policy</p>
            </div>
            <div className="w-[200px]">
              <h2 className=" font-poppins  font-[600px] text-[25px] mb-7 gap-11">
                Contacts US{" "}
              </h2>
              <p>+234-704-418-4306</p>
              <p>+234-810-292-9044 </p>
              <p>Safety for Runners</p>
              <p>Privacy Policy</p>

              <div className="my-10">
                <h2 className=" font-poppins  font-[600px] text-[25px] md:my-4 my-9 justify-center m">
                  follow Us{" "}
                </h2>
                <div className="flex gap-3 ">
                  <Linkedin />
                  <Facebook />
                  <Instgarm />
                </div>
              </div>
            </div>
          </div>
          <hr className="line-foot text-white" />

          <div className="copp text-white text-center text-[20px]">
            ©{currentYear} Herrands Solutions Limited. All rights reserved
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
