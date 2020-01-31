import * as React from "react";
import * as style from "./style.scss";
import First from "./First";
import Top from "./Top";
import Second from "./Second";
import FanJu from "./FanJu";
import ManHua from "./MnaHua";
import ZhuanLan from "./ZhuanLan"

export default function Body() {
  return <div className={style.a}>
    <Top />
    <First />
    <Second />
    <FanJu />
    <ManHua />
    <ZhuanLan />
  </div>
}