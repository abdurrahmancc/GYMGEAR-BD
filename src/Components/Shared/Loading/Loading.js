import React from "react";

const Loading = () => {
  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex justify-content-center w-100 align-items-center"
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
