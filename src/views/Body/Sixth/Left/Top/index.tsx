import React from "react";
import Left from "../../../Fourth/Left/Top/Left";
import Right from "../../../Fourth/Left/Top/Right";
import * as style from "./style.scss";

export default function Top (props:any){
  return <div className={style.box}>
    <Left tag={props.tag}/>
    <Right />
  </div>
}