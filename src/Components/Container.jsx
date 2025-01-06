import React from "react";

function Container({ children }) {
  return (
    <div className="lg:max-w-[1440px] md:max-w-[1204px] w-[92%] mx-auto">
      {children}
    </div>
  );
}

export default Container;
