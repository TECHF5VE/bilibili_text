import * as React from "react";
import * as style from "./style.scss";
import img from "src/images/Right.png";




export default function Left() {
  return <div className={style.a}>

    <div className={style.b}> <a >在线列表</a></div>
    <a className={style.c}> <img src={img} width="248px" height="170px" /></a>

  </div>

}