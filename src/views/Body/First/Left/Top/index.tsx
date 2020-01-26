import React from "react";
import { Icon, Button } from "antd";
import * as style from "./style.scss";

export default function Top() {
  return <div className={style.box}>
    <div className={style.left}>
      <div>
        <Icon type="play-square" className={style.iconB}/>
        <a className={style.content}>正在直播</a>
      </div>
      <div className={style.dir}>
        <div>
          <span className={style.text}>当前共有<span className={style.num}>9999</span>个在线直播</span>
        </div>
        <div>
        <Icon type="fire" className={style.iconS}/>
          <a className={style.txt}>233秒居然能做这些</a>
        </div>
      </div>
    </div>
    <div className={style.right}>
    <Button size="small" icon="sync">换一批</Button> 
    <Button size="small" className={style.button}>更多<Icon type="right" /></Button>
    </div>
  </div>
}