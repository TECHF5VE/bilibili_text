import React from "react";
import { Icon, Button } from "antd";
import * as style from "./style.scss";

export default function Top() {
  return <div className={style.box}>
    <div className={style.left}>
      <div>
        <Icon type="play-square" className={style.iconB}/>
        <a className={style.content}>动画</a>
      </div>
    </div>
    <div className={style.right}>
    <Button size="small" icon="sync">换一批</Button> 
    <Button size="small" className={style.button}>更多<Icon type="right" /></Button>
    </div>
  </div>
}