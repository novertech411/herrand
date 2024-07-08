import React from "react";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

export const Safety = () => {
  return (
    <div>
      <Navbar />

      <div class="container text-[16px] flex justify-center items-center w-full pt-16">
        <div class="content sm:w-[80%] w-[95%] py-24 text-justify">
          <h3 class="text-[30px] font-medium">
            Safety Requirements
            <span class="w-[15px] flex rounded-md bg-[#0066F5] h-[5px]"></span>
          </h3>
          <div class="py-4">
            <p class="py-4">
              Welcome to our time-sharing community, where you access a smarter
              way of sending your errands and enjoying convenience!
            </p>
            <p>
              At Herrands, your safety is our utmost priority. We are committed
              to providing a secure and trustworthy platform for you to delegate
              your errands with confidence. To ensure you have a stellar
              experience every time you use our platform, here are some safety
              tips and recommendations:
            </p>
          </div>
          <div class="w-full sm:h-[500px] h-[250px] py-4">
            <iframe
              class="w-full h-full"
              title="Safety description"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&amp;loop=1"
            ></iframe>
          </div>
          {/* <h3 class="text-[30px] font-medium py-8">
            Safety Tips
            <span class="w-[15px] flex rounded-md bg-[#0066F5] h-[5px]"></span>
          </h3> */}
          <div class="py-4">
            <span class="flex">
              <p>
                <b>Profile Verification: </b> Each runner on our platform
                undergoes a comprehensive background check and verification
                process to ensure they meet our safety standards. Only runners
                who pass our stringent vetting process are allowed to complete
                errands on our platform. So, be sure to stay on the platform
                before delegating your errands to them. Furthermore, we
                discourage offline dealings in any form.
              </p>
            </span>
          </div>

          <div class="py-4">
            <span class="flex">
              <p>
                <b>Clear Communication: </b> Maintain clear communication with
                runners regarding your errands requirements and expectations.
              </p>
            </span>
          </div>

          <div class="py-4">
            <span class="flex">
              <p>
                <b>Task Guidelines: </b> When sending errands and/or assigning
                tasks, ensure to provide your runner with clear instructions and
                specify any safety requirements you have for your maximum
                satisfaction
              </p>
            </span>
          </div>

          <div class="py-4">
            <span class="flex">
              <p>
                <b>Meeting in Public: </b> For errands that require physical
                interactions and meet-ups, consider choosing public places for
                added safety.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                <b>Payment Safety: </b> Use secure payment methods, and utilise
                our built-in payment system when sending your errands.
              </p>
            </span>
          </div>

          {/* <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Clear Communication: </b> Maintain clear communication
                with runners regarding your errands requirements and expectations.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Meeting in Public: </b> For errands that require physical
                interactions and meet-ups, consider choosing public places for
                added safety.
              </p>
            </span>
          </div> */}

          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Privacy: </b> Safeguard your personal information and share
                only the details necessary for the efficient running and
                completion of your errands.
              </p>
            </span>
          </div>

          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Accountability: </b> You play a vital role in ensuring the
                success of your errands and adherence to these safety
                guidelines. Your cooperation is appreciated.
              </p>
            </span>
          </div>

          <div class="py-4">
            <span class="flex">
              <p>
                <b>Feedback and Reviews: </b> Your feedback helps improve our
                platform and ensures the safety of the community. Share your
                experiences and thoughts after each task.
              </p>
            </span>
          </div>

          <div class="py-4">
            <span class="flex">
              <p>
                <b>Dispute Resolution: </b> If you encounter any issues or
                disputes during a task, please make sure to report them as soon
                as possible. We have a dedicated team to assist in resolving
                conflicts. Also, if you have any questions about these
                guidelines and the general operations of our time-sharing
                platform, you can contact our support team for help.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                Thank you for choosing to work with us in pursuit of our dreams
                to make the world a better place by providing decent work and
                economic growth. You have our best wishes.
              </p>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
