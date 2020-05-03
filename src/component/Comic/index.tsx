import * as React from "react";
import * as style from "./style.scss";
import img from "src/images/Fan.png";
export default function Comic () {
    return <div className={style.a}>
        <a  > <img src={img} /></a>
        <div className={style.d}><a  className={style.b}>番剧名称</a>
            <a  className={style.c}>第n话</a>
        </div></div>
}