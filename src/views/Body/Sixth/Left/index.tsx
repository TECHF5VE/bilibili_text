import React from "react";
import Top from "./Top";
import Body from "../../Fourth/Left/Body"

export default function Left (props:any){
  return <div>
    <Top tag={props.tag}/>
    <Body />
  </div>
}