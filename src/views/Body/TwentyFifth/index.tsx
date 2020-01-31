import React from "react";
import * as style from "./style.scss";
import Left from "./Left";
import Right from "./Right";

export default function TwentyFifth (props:any){
  return <div className={style.main} id="TwentyFifth" >
    <Left tag={props.tag}/>
    <Right />
  </div>
}