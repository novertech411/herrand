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
import Twitter from "../Components/icons/Twitter";

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
            <div data-aos="zoom-out-up" className="w-[350px]">
              <div className="bg-white rounded-xl p-3 flex-wrap  w-[200px] mb-7">
                {" "}
                <img className="  " src={logo} alt="" />{" "}
              </div>

              <p> Save time. Earn Money. Live Better</p>

              <p className="mt-[40px]">
                Are you looking for a flexible way to earn extra income? Join
                Herrands as a runner!
              </p>
              <Link className=" hidden md:flex" to="/agent">
                <div
                  className=" font-poppins  bg-primary border-2 border-primary text-white p-3 font-[500] rounded-2xl hover:bg-white hover:text-primary   cursor-pointer "
                  // onClick={() =>
                  //   window.open(
                  //     "https://play.google.com/store/apps/details?id=com.herrands",
                  //     "_blank"
                  //   )
                  // }
                >
                  Become a Runner
                </div>
              </Link>
            </div>
            <div
              data-aos="zoom-out-up"
              className="w-[200px] text-[20px] no-underline"
            >
              <h2 className=" font-poppins  font-[600px] text-[25px] mb-7">
                Company{" "}
              </h2>

              <Link to="/terms  " className="no-underline text-white">
                {" "}
                <p>Terms of Services</p>
              </Link>
              <Link to="/privacy" className="no-underline text-white">
                {" "}
                <p>Privacy Policy</p>{" "}
              </Link>
              <Link to="/guides" className="no-underline text-white">
                {" "}
                <p>Guides for Runners</p>{" "}
              </Link>
              <Link to="/safety" className="no-underline text-white">
                {" "}
                <p>Safety for Senders</p>
              </Link>
            </div>
            <div data-aos="zoom-out-up" className="w-[200px]">
              <h2 className=" font-poppins  font-[600px] text-[25px] mb-7 gap-11">
                Contacts US{" "}
              </h2>
              <p>+234-704-418-4306</p>
              <p>+234-810-292-9044 </p>
              <p>
                send<span>@</span>herrands.com{" "}
              </p>

              <div className="my-10">
                <h2 className=" font-poppins  font-[600px] text-[25px] md:my-4 my-9 justify-center m">
                  Follow Us{" "}
                </h2>
                <div className="flex gap-3 items-center ">
                  <a href="https://www.linkedin.com/company/sendherrands/posts/?feedView=all">
                    <Linkedin />
                  </a>
                  <a href="https://x.com/sendherrands">
                    <Twitter />
                  </a>
                  <a href="https://www.instagram.com/sendherrands/">
                    <Instgarm />{" "}
                  </a>
                  <a href="https://web.facebook.com/sendherrands">
                    <Facebook />
                  </a>
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
