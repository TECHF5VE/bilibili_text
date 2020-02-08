import React from "react";
import Top from "./Top";
import Body from "../../Fourth/Left/Body"
import * as style from "./style.scss";

export default function Left (props:any){
  return <div className={style.box}>
    <Top tag={props.tag}/>
    <Body />
  </div>
}