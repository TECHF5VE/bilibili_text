import * as React from "react";
import * as style from "./style.scss";
import img1 from "src/images/img4.jpg";
import img3 from "src/images/img6.jpg";
import img2 from "src/images/img5.jpg";
import { Icon } from "antd";

export default function Compent() {
  return <div className={style.box}>
    <a  className={style.picture}>
      <img src={img2} width="190px" height="120px" />
      <img src={img1} width="190px" height="120px" className={style.hidden}/>
      <div className={style.icon}><Icon type="team" />999</div>
    </a>
    <a  className={style.content}>
      <img src={img3} width="40px" height="40px" className={style.img}/>
      <div className={style.txt}>
        <a className={style.text}>央视新闻</a><br/>
        <span className={style.dir}>一些有用的介绍</span><br/>
        <span className={style.tip}>娱乐·学习</span>
      </div>
    </a>
  </div>
}