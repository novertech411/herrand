import React from "react";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

export const Safety = () => {
  return (
    <div>
      <Navbar />

      <div class="container text-[16px] flex justify-center items-center w-full pt-16">
        <div class="content sm:w-[80%] w-[95%] py-24">
          <h3 class="text-[30px] font-medium">
            Safety Requirements
            <span class="w-[15px] flex rounded-md bg-[#0066F5] h-[5px]"></span>
          </h3>
          <div class="py-4">
            <p class="py-4">
              Hi there, Welcome to our time-sharing community, where you access
              a smarter way of managing your day!
            </p>
            <p>
              At Herrands, we prioritize your safety and well-being when you use
              our time-sharing platform. To ensure you have a stellar experience
              every time you use our platform, here are some safety tips and
              recommendations:
            </p>
          </div>
          <div class="w-full sm:h-[500px] h-[250px] py-4">
            <iframe
              class="w-full h-full"
              title="Safety description"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&amp;loop=1"
            ></iframe>
          </div>
          <h3 class="text-[30px] font-medium py-8">
            Safety Tips
            <span class="w-[15px] flex rounded-md bg-[#0066F5] h-[5px]"></span>
          </h3>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Profile Verification :</b> Verify the profiles of agents and
                make sure they are from our platform before delegating your
                errands to them. Furthermore, we discourage offline dealings in
                any form.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Meeting in Public :</b> For errands that require physical
                interactions and meet-ups, consider choosing public places for
                added safety.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Payment Safety :</b> Use secure payment methods, and utilize
                our built-in payment system when available
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Clear Communication :</b> Maintain clear communication with
                agents regarding your errands requirements and expectations.
              </p>
            </span>
          </div>
          <h3 class="text-[30px] font-medium py-8">
            Privacy
            <span class="w-[15px] flex rounded-md bg-[#0066F5] h-[5px]"></span>
          </h3>
          <div class="py-4">
            <p>
              Safeguard your personal information and share only the details
              necessary for the efficient running and completion of your
              errands.
            </p>
          </div>
          <h3 class="text-[30px] font-medium py-8">
            Task Guidelines
            <span class="w-[15px] flex rounded-md bg-[#0066F5] h-[5px]"></span>
          </h3>
          <div class="py-4">
            <p>
              When sending errands and/or assigning tasks, ensure to provide
              your agent with clear instructions and specify any safety
              requirements you have for your maximum satisfaction.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    
  );
};
