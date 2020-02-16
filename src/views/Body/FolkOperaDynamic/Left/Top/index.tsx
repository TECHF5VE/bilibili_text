import React from "react";
import Left from "../../../Animation/Left/Top/Left";
import Right from "../../../Animation/Left/Top/Right";
import * as style from "./style.scss";

export default function Top (props:{tag:string}){
  return <div className={style.box}>
    <Left tag={props.tag}/>
    <Right />
  </div>
}