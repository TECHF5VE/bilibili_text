import * as React from "react";
import Top from "./Top";
import Body from "./Body";
import * as style from "./style.scss";

export default function Left (){
  return <div className={style.box}>
    <Top />
    <Body />
  </div>
}