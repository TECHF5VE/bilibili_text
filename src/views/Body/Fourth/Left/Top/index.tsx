import React from "react";
import * as style from "./style.scss";
import Right from "./Right";
import Left from "./Left";

export default function Top() {
  return <div className={style.box}>
    <Left tag="动画"/>
    <Right />
  </div>
}