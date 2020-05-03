import React from "react";
import * as style from "./style.scss";
import Right from "../../Animation/Left/Top/Right";
import Left from "../../Animation/Left/Top/Left";

export default function Top (props:{tag:string}){
  return <div className={style.box}>
    <Left tag={props.tag}/>
    <Right />
  </div>
}