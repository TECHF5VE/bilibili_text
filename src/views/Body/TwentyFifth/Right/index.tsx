import React from "react";
import img from "./img.png";
import * as style from "./style.scss";

export default function Right (){
  return <div className={style.img}>
    <img src={img} alt=""/>
  </div>
}