import React from "react";
import * as style from "./style.scss";
import { Icon} from "antd";
import img from "./img.png";

export default function Upcontent() {
  return <div className={style.box}>
    <div className={style.top}>
      <img src={img} alt="" width="113px" height="63px" />
      <div className={style.right}>
        <div className={style.dir}>这个东西很有趣,可看</div>
        <div><span className={style.writer}>哈默默</span><span className={style.time}>2020.1.30</span></div>
      </div>
    </div>
    <div className={style.bottom}>
      <div><Icon type="play-square" /><span className={style.text}>999</span></div>
      <div><Icon type="like" /><span className={style.text}>999</span></div>
    </div>
  </div>
}