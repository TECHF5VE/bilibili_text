import * as React from "react";
import * as style from "./style.scss";
import TuiGuang from "./TuiGuang";
import BaiNianJi from "./BaiNianJi";
import Third from "./Third";
import Top from "./Top";
import Fourth from "./Fourth";

export default function Body() {
  return <div className={style.a}>
    <Top />
    <TuiGuang />
    <BaiNianJi />
    <Third />
    <Fourth />
  </div>
}