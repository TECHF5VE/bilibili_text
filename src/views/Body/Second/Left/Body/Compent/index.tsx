import * as React from "react";

import * as style from "./style.scss";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import { Icon } from "antd";

export default function Compent() {
  return <div className={style.box}>
    <a href="" className={style.picture}>
      <img src={img2} width="206px" height="120px" />
      <img src={img1} width="206px" height="120px" className={style.hidden}/>
      <div className={style.icon}><Icon type="team" />999</div>
    </a>
    <a href="">
      <div className={style.txt}>
        <span className={style.dir}>一些有用的介绍</span><br/>
        <span className={style.tip}>UP·学习</span>
      </div>
    </a>
  </div>

}