import * as React from "react";
import * as style from "./style.scss"
import img from "src/images/upleft1.png";
import hhg from "src/images/upleft2.png";
import nmg from "src/images/upleft3.png";

export default function Left() {
    return <div className={style.a}>
        <div className={style.c}>
            <a><img src={img} width="35px" height="35px" /></a>
            <a className={style.b}>首页</a>
        </div >
        <div className={style.c}>
            <a><img src={hhg} width="35px" height="35px" /></a>
            <a className={style.b}>动态</a>
        </div>
        <div className={style.c}>
            <a><img src={nmg} width="35px" height="35px" /></a>
            <a className={style.b}>排行榜</a>
        </div>
    </div>
}