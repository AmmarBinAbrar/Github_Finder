import React from "react";

const Spinner = () => {
  return (
    <>
      <p>
        <i
          className="fa-solid fa-spinner fa-spin"
          style={{
            size: "300px",
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
        ></i>
      </p>
    </>
  );
};

export default Spinner;
