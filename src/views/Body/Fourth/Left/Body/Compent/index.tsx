import React from "react";
import * as style from "./style.scss";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import { Icon } from "antd";

export default function Compent() {
  return <div className={style.box}>
    <a className={style.picture}>
      <div>
        <img src={img2} width="206px" height="120px" />
        
      </div>
      <div className={style.hidden}>
        <img src={img1} width="206px" height="120px" />
        <div className={style.icon1}><Icon type="team" />999</div>
        <div className={style.icon2}><Icon type="like" />999</div>
      </div>
    </a>
    <a>
      <div className={style.txt}>
        <span className={style.dir}>一些有用的介绍</span><br />
        <span className={style.tip}>UP·学习</span>
      </div>
    </a>
  </div>

}