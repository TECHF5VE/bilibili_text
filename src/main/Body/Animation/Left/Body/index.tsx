import * as React from "react";
import * as style from "./style.scss";
import Component from "../../../../../component/BasicPart";

export default function Body() {
  return <div className={style.main}>
    <div className={style.line}>
      <Component value="赋值"/>
      <Component  value="赋值"/>
      <Component  value="赋值"/>
      <Component  value="赋值"/>
    </div>
    <div className={style.line}>
      <Component  value="赋值"/>
      <Component  value="赋值"/>
      <Component  value="赋值"/>
      <Component  value="赋值"/>
    </div>
  </div>
}