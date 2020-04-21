import * as React from "react";
import * as style from "./style.scss";
import Component from "../Animation/Left/Body/Upcontext/Component";
import Top from "../FolkOperaDynamic/Left/Top";
import Right from "./Right";

export default function TuiGuang() {

  return <div className={style.a}>
    <div className={style.main}>
      <Top tag="推广" />
      <div className={style.line}>
        <Component title="诸神黄昏-哈默默饭制" src="http://www.hamomo.top/videos/哈默默-诸神黄昏.mp4"/>
        <Component title="诸神黄昏" src="http://www.hamomo.top/videos/诸神黄昏.mp4"/>
        <Component title="可爱小女孩" src="http://www.hamomo.top/videos/小女孩.mp4"/>
        <Component title="王者诗词" src="http://www.hamomo.top/videos/王者诗词.mp4"/>
      </div>
    </div>
    <Right />
  </div>
}