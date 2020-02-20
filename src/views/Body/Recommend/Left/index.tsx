import React from "react";
import Top from "../../FolkOperaDynamic/Left/Top";
import Component from "../../Animation/Left/Body/Upcontext/Component";
import * as style from "./style.scss";

export default function Left (props:{tag:string}){
  return <div className={style.box} >
    <Top tag={props.tag}/>
    <div className={style.line}>
      <Component value="vfvjnv"/>
      <Component value="vfvjnv"/>
      <Component value="vfvjnv"/>
      <Component value="vfvjnv"/>
    </div>
  </div>
}