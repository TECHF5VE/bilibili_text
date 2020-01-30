import * as React from "react";
import * as style from "./style.scss";
import TuiGuang from "./TuiGuang";
import BaiNianJi from "./BaiNianJi";
import First from "./First";
import Top from "./Top";
import Second from "./Second";

export default function Body() {
  return <div className={style.a}>
    <Top />
  <TuiGuang />
  <BaiNianJi />
  
 
    <First />
    <Second />
  </div>
}