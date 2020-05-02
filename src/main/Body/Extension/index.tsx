import * as React from "react";
import * as style from "./style.scss";
import Component from "../../../component/BasicPart";
import Top from "./Top";
import Right from "./Right";

export default function TuiGuang() {

  return <div className={style.a}>
    <div className={style.main}>
      <Top tag="推广" />
      <div className={style.line}>
        <Component value="hamomo"/>
        <Component value="hamomo"/>
        <Component value="hamomo"/>
        <Component value="hamomo"/>
      </div>
    </div>
    <Right />
  </div>
}