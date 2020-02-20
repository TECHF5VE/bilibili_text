import * as React from "react";
import * as style from "./style.scss"
import Game from "./Game"
import Cartoon from "./Cartoon"
import BaiNian from "./BaiNian";
import { Link } from "react-router-dom";

export default function Left() {
  return <div className={style.a}>
    <Link to="/hamepage/" className={style.b}>主站</Link>
    <a className={style.b}>番剧</a>
    <Game />
    <a className={style.b}>直播</a>
    <a className={style.b}>会员购</a>
    <Cartoon />
    <a className={style.b}>赛事</a>
    <BaiNian />
    <a className={style.b}>下载app</a>
  </div>
}