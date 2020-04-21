import React from "react";

export default function Player(){
  return <div>
    <video autoPlay controls width='800px' height="500px" preload="auto">
      <source src="video1.mp4" />
    </video>
  </div>
}