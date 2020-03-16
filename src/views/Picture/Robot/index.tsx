import React from "react";
import * as style from "./style.scss";


// eslint-disable-next-line react/display-name
export default function () {
  return <div className={style.box}>
    <div className={style.one}>
      <div className={style.ear1} />
      <div className={style.ear2} />
    </div>
    <div className={style.two}>
      <div className={style.line}>
        <div className={style.eye} />
        <div className={style.eye} />
      </div>
      <div className={style.mouth} />
    </div>
    <div className={style.three}>
      <div className={style.aim1} />
      <div className={style.body}>
        <div className={style.tip} />
        <div className={style.tip} />
        <div className={style.tip} />
      </div>
      <div className={style.aim2} />
    </div>
    <div className={style.four}>
      <div className={style.lang} />
      <div className={style.lang} />
    </div>
  </div>
}