import * as React from "react";
import * as style from "./style.scss";
import img1 from "src/images/zhuanlan.png";
import img2 from "src/images/zhibo.png";
import img3 from "src/images/xiaoheiwu.png";
import img4 from "src/images/zhuanti.png";
import img5 from "src/images/huodong.png";
import img6 from "src/images/saishi.png";

export default function Right() {
    return <div className={style.a}>
        <div className={style.c}>
            <a className={style.b}><img src={img1} width="15px" height="15px" />专栏</a>
            <a className={style.b}><img src={img2} width="15px" height="15px" />直播</a>
        </div>
        <div className={style.c}>
            <a className={style.b}><img src={img3} width="15px" height="15px" />小黑屋</a>
            <a className={style.b}><img src={img4} width="15px" height="15px" />专题</a>
        </div>
        <div className={style.c} >
            <a className={style.b}><img src={img5} width="15px" height="15px" />活动</a>
            <a className={style.b}><img src={img6} width="15px" height="15px" />赛事</a>
        </div>
    </div>
}