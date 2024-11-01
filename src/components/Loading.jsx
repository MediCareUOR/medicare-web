import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../lottie/loading.json";

function Loading() {
  return (
    <div className="absolute z-10 ml-auto mr-auto mt-14 pt-8 w-96 h-[500px] left-0 right-0 text-center bg-x1 rounded-2xl mb-8">
      <Lottie animationData={loadingAnimation} loop={true} />
      <h4 className="text-2xl text-white font-semibold pb-4">Loading ...</h4>
    </div>
  );
}

export default Loading;
