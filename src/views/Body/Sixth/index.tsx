import React from "react";
import Left from "./Left";
import * as style from "./style.scss";
import Right from "../Fourth/Right";

export default function Sixth (props:any){
  return <div className={style.main}>
    <Left tag={props.tag}/>
    <Right />
  </div>
}