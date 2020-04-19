import React from "react";
import * as style from './style.scss';
import Right from "./Right";
import Top from "src/views/Header/Top";
import Left from "./Left";

export default function PlayPage() {
  return <div className={style.box}>
    <Top />
    <div className={style.main}>
      <Left />
      <Right />
    </div>
  </div>
}