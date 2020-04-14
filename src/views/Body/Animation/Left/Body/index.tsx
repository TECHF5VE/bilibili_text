import * as React from "react";
import * as style from "./style.scss";
import Component from "./Upcontext/Component";

export default function Body() {
  return <div className={style.main}>
    <div className={style.line}>
      <Component />
      <Component />
      <Component />
      <Component />
    </div>
    <div className={style.line}>
      <Component />
      <Component />
      <Component />
      <Component />
    </div>
  </div>
}