import React from "react";
import * as style from './style.scss';
import Player from "./Player";

export default function Left() {
  return <div className={style.box}>
    <div className={style.title}>
      <h1 className={style.tip}>
        Hamomo 分享会
      </h1>
      <div className={style.dir}>
        技术 &gt; 分享
      </div>
      <div className={style.dir}>
        9999次播放 · 9999弹幕
      </div>
    </div>
    <Player />
  </div>
}