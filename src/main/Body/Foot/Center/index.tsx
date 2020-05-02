import React from "react";
import * as style from "./style.scss";
import Compent from "../../../../component/FootPart";

export default function Center() {
  return <div className={style.box}>
    <div className={style.top}>传送门</div>
    <div className={style.line}>
      <Compent tag="帮助中心" />
      <Compent tag="倾诉申诉" />
      <Compent tag="壁纸站" />
    </div>
    <div className={style.line}>
      <Compent tag="高级弹幕" />
      <Compent tag="活动中心" />
      <Compent tag="专车号服务中心" />
    </div>
    <div className={style.line}>
      <Compent tag="活动专题页" />
      <Compent tag="用户反馈论坛" />
      <Compent tag="名人堂" />
    </div>

  </div>
}