import React from "react";
import img from "src/images/img3.png";
import * as style from "./style.scss";

export default function Right (){
  return <div className={style.img}>
    <img src={img}/>
  </div>
}