import * as React from "react";
import * as style from "./style.scss"
import img from "./upleft1.png";
import hhg from "./upleft2.png";
import nmg from "./upleft3.png";

export default function Left(){
    return <div className={style.a}>
        <div className={style.e}>
        <a  className={style.d}> <img src={img}/></a> <a  className={style.b}>首页</a>
        </div ><div className={style.c}>
        <a  className={style.d}><img src={hhg}/></a><a  className={style.b}>动态</a>
        </div><div className={style.c}>
        <a  className={style.d}><img src={nmg}/></a><a  className={style.b}>排行榜</a>
</div>
    </div>
}