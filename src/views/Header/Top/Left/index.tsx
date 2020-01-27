import * as React from "react";
import * as style from "./style.scss"
import Game from "./Game"
import Cartoon from "./Cartoon"
import BaiNian from "./BaiNian";

export default function Left(){
    return <div className={style.a}>
        <a href="" className={style.b}>主站</a>
        <a href="" className={style.b}>番剧</a>
        <Game />
        <a href="" className={style.b}>直播</a>
        <a href="" className={style.b}>会员购</a>
        <Cartoon />
        <a href="" className={style.b}>赛事</a>
        <BaiNian />
        <a href="" className={style.b}>下载app</a>
    </div>
}