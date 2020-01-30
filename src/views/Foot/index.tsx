import React from "react";
import * as style from "./style.scss";
import Center from "./Center";
import Left from "./Left";

export default function Foot() {
  return <div className={style.main}>
    <div className={style.box}>
      <Left />
      <Center />
      
    </div>
    <a href="http://beian.miit.gov.cn/" className={style.a}>备案号：陇ICP备19003937</a>
  </div>
}