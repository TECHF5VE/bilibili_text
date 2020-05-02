import React from "react";
import * as style from './style.scss';
import Player from "./Player";

export default function Left(props:{title:string,src:string}) {
  return <div className={style.box}>
    <div className={style.title}>
      <h1 className={style.tip}>
        {props.title}
      </h1>
      <div className={style.dir}>
        技术 &gt; 分享
      </div>
      <div className={style.dir}>
        9999次播放 · 9999弹幕
      </div>
    </div>
    <Player src={props.src} />
  </div>
}