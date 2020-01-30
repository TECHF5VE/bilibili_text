import * as React from "react";
import * as style from "./style.scss";
import DianShiJu from "./DianShiJu";
import TuiGuang from "./TuiGuang";
import BaiNianJi from "./BaiNianJi";
import Top from "./Top"

export default function Body(){
  return <div className={style.a}>
    <Top />
  <TuiGuang />
  <BaiNianJi />
    <DianShiJu />
 
  </div>
}