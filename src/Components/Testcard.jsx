import React from "react";
import testimage from "../assets/image/testimoner.png";

function Testcard() {
  return (
    <div className="bg-blue-100 p-9  font-poppins  rounded-2xl md:w-[450px] w-[320px] mx-auto">
      <div className="py-7  rounded-full">
        {" "}
        <img
          className=" w-[100px] h-[100px] rounded-full"
          src={testimage}
          alt=""
        />
      </div>
      <h4 className=" font-poppins font-[500] text-[20px]">Sarah Williams</h4>
      <p className="text-[18px] font-poppins">Marketing Manager</p>
      <p className="mt-7 text-[18px]">
        “Herrands is a lifesaver! As a busy marketing manager, the reliable
        runners help with my errands, making my life much easier!”
      </p>
    </div>
  );
}

export default Testcard;
