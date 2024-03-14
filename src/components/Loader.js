import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container">
      <RotatingLines
        visible={true}
        height="100"
        width="160"
        color="grey"
        strokeColor="#f2ab00"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
