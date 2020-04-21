import React from "react";

export default function Player(props:{src:string}){
  return <div>
    <video controls width='800px' height="500px" preload="auto">
      <source src={props.src} />
    </video>
  </div>
}