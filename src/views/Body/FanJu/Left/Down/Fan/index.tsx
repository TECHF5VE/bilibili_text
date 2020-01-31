import * as React from "react";
import * as style from "./style.scss";
import img from "./Fan.png";
export default function (){
    return <div className={style.a}>
        <a href="#" > <img src={img}/></a>
        <div className={style.d}><a href="#" className={style.b}>番剧名称</a>
        <a href="#" className={style.c}>第n话</a>
    </div></div>
        }