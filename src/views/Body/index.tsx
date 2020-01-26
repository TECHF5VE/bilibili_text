import * as React from "react";
import * as style from "./style.scss";
import DianShiJu from "./DianShiJu";
import Top from "./Top";

export default function Body(){
  return <div className={style.a}>
    <Top />
    <DianShiJu />
 
  </div>
}