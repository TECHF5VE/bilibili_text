import React from "react";
import * as style from "./style.scss";
import Left from "./Left";
import Right from "./Right";

export default function Recommend (){
  return <div className={style.main} id="Recommend" >
    <Left tag="特别推荐"/>
    <Right />
  </div>
}