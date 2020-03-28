import * as React from "react";
import * as style from "./style.scss";
import Component from "./Upcontext/Component";

export default function Body() {
  return <div className={style.main}>
    <div className={style.line}>
      <Component value="今天一天"/>
      <Component value="今天亿美元"/>
      <Component value="发教育局v"/>
      <Component value="隔一条街v"/>
    </div>
    <div className={style.line}>
      <Component value="南有嘉鱼"/>
      <Component value="还让他今天又"/>
      <Component value="火绒鸡同鸭讲"/>
      <Component value="会如何进入"/>
    </div>
  </div>
}