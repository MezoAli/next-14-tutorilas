"use client";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl my-4 text-red-700 font-semibold">
        {error.message}
      </p>
      <button className="btn btn-success" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default Error;
