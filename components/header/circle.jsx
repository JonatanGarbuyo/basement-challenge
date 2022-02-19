import React from "react";

export default function Circle() {
  return (
    <div
      className="mx-2 w-6 h-6 grid grid-cols-2 justify-items-center content-center rounded-full bg-white overflow-hidden"
      style={{border: "solid white 1px"}}
    >
      <div className="w-3 h-3 " />
      <div className="w-3 h-3 bg-black " />
      <div className="w-3 h-3 bg-black " />
      <div className="w-3 h-3" />
    </div>
  );
}
