import React from "react";

const Heading = ({text}) => {
  return (
    <>
      <div className="heading-container mt-3">
        <div className="heading row text-center my-5">
          <h1>{text}</h1>
        </div>
      </div>
    </>
  );
};

export default Heading;
