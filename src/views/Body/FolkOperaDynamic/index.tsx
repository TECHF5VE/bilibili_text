import React from "react";
import Left from "./Left";
import * as style from "./style.scss";
import Right from "../Animation/Right";

export default function Sixth (props:{tag:string;id:string}){
  return <div className={style.main} id={props.id}>
    <Left tag={props.tag}/>
    <Right />
  </div>
}