import React from "react";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";

export const Guides = () => {
  return (
    <div>
      <Navbar />

      <div class="container text-[16px] flex justify-center items-center w-full pt-16">
        <div class="content sm:w-[80%] w-[95%] py-24 text-justify">
          <h3 class="text-[30px] font-medium">
            Guidelines
            <span class="w-[15px] flex rounded-md bg-[#0066F5] h-[5px]"></span>
          </h3>
          <div class="py-4">
            <p class="py-4">Welcome to our time-sharing community!</p>
            <p>
              At Herrands, we believe in creating a secure working environment
              that will enable our runners to provide exceptional services to
              our valued senders. To ensure a smooth experience for you while
              running errands on our platform, please adhere to the following
              guidelines that covers code of conduct, safety measures and how we
              protect you:
            </p>
          </div>
          <div class="w-full sm:h-[500px] h-[250px] py-4">
            <iframe
              class="w-full h-full"
              title="Guidesdescription"
              src="https://www.youtube.com/embed/CP9CsIBBEFw?playlist=CP9CsIBBEFw&amp;loop=1"
            ></iframe>
          </div>
          <h3 class="text-[30px] font-medium py-8">
            Code of Conduct
            <span class="w-[15px] flex rounded-md bg-[#0066F5] h-[5px]"></span>
          </h3>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Professionalism: </b> At Herrands, one of our core values is
                respect. Be sure to maintain professionalism, politeness, and
                respect in all your interactions with senders and fellow
                runners.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Punctuality: </b> Be punctual and arrive on time for tasks
                and appointments that are assigned and given to you as errands.
                In case of unforeseen circumstances that can result in delay,
                ensure you communicate promptly to your sender.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Task Completion: </b> To showcase excellence, ensure that you
                commit to completing all errands to the best of your abilities,
                meeting the sender's expectations. This improves your rating and
                qualifies you for more opportunities on our platform.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Communication: </b> Communicate clearly and promptly with
                senders. Keep them informed about the progress of their errands.
                There are built-in features in your app to help you provide
                excellent communications for your senders.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Privacy: </b> You are being trusted with some confidential
                information to be able to run your errands efficiently on our
                platform. Respect the privacy and confidentiality of our
                senders' information at all times.
              </p>
            </span>
          </div>
          <h3 class="text-[30px] font-medium py-8">
            Safety Measures
            <span class="w-[15px] flex rounded-md bg-[#0066F5] h-[5px]"></span>
          </h3>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Follow Traffic Rules: </b> When running errands that involve
                using roads and highways, always wear your protective equipment,
                obey traffic laws and drive safely.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Secure Items: </b> Safeguard items you're responsible for,
                ensuring they are not damaged or lost. Some items require
                handling with care. Ensure that you are aware of the kind of
                items being handed to you, and handle them appropriately.
              </p>
            </span>
          </div>
          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Social Distancing: </b> In appropriate situations, maintain
                social distancing for the safety of both parties.
              </p>
            </span>
          </div>

          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Safety & Protection: </b> We perform background checks on all
                senders using our platform to ensure a safe working environment.
                In addition, there are regular training sessions on safety
                protocols and best practices.
              </p>
            </span>
          </div>

          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Reporting: </b>If you encounter any issues, concerns, or
                suspicious activity that can endanger you or threaten your
                safety, please report them to our support team immediately. We
                are here to assist you 24/7.
              </p>
            </span>
          </div>

          <div class="py-4">
            <span class="flex">
              <p>
                {" "}
                <b>Dispute Resolution: </b> In case of disputes or conflicts,
                remember that open communication is key. Try to resolve issues
                directly with the sender. If a resolution cannot be reached, or
                if you have any questions about these guidelines and general
                operations of our time-sharing platform, contact our support
                team for assistance.
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
