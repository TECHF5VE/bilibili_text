import React from "react";
import Top from "./Top";
import Component from "../../Animation/Left/Body/Upcontext/Component";
import * as style from "./style.scss";

export default function Left (props:{tag: any}){
  return <div className={style.box} >
    <Top tag={props.tag}/>
    <div className={style.line}>
      <Component value={"赋值"}/>
      <Component value={"赋值"}/>
      <Component value={"赋值"}/>
      <Component value={"赋值"}/>
    </div>
  </div>
}