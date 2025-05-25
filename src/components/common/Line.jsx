import React from "react";

function Line({ width = "w-full", className = "" }) {
  return <div className={`h-px bg-gray-300  ${width} ${className}`} />;
}

export default Line;
