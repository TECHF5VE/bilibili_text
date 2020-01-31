import * as React from "react";
import {  Button } from "antd";
import * as style from "./style.scss";
import img from "./Top.png";
export default function Top() {
  return <div className={style.box}>
    <div className={style.left}>
      <div>
      <a href="#" > <img src={img}/></a>
        <a className={style.content}>专栏</a>
      </div>
    </div>
    <div className={style.right}>
    <Button size="small" icon="sync">换一批</Button> 
    <Button size="small" className={style.button}>更多</Button>
    </div>
  </div>
}