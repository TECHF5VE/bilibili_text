import * as React from "react";
import * as style from "./style.scss";
<<<<<<< HEAD
import DianShiJu from "./DianShiJu";
import TuiGuang from "./TuiGuang";
import BaiNianJi from "./BaiNianJi";
import Top from "./Top"
=======
import First from "./First";
import Top from "./Top";
import Second from "./Second";
>>>>>>> 1578e0b41d9a951fbb51d4a48186315561be698f

export default function Body() {
  return <div className={style.a}>
    <Top />
<<<<<<< HEAD
  <TuiGuang />
  <BaiNianJi />
    <DianShiJu />
 
=======
    <First />
    <Second />
>>>>>>> 1578e0b41d9a951fbb51d4a48186315561be698f
  </div>
}