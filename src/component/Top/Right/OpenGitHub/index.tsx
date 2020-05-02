import * as React from "react";
import { Icon } from "antd";
import * as style from "./style.scss";

export default function OpenGitHub (){
  return <a href="https://github.com/hamono/bilibili_text" className={style.box}>
    <Icon type="select" className={style.icon} />
    <div className={style.place} >Github</div>
  </a>
}