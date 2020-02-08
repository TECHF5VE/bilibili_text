import * as React from "react";
import * as style from "./style.scss";
import img from "./img1.png";

export default function BaiNian() {
  return (
  <div className={style.box}>
    <div className={style.minBox}>
      <a  className={style.moveCentext}>拜年祭</a>
      <a  className={style.moveCentext}><img src={img} className={style.move}/></a>
      <a  className={style.moveCentext}>拜年祭</a>
    </div>
  </div>
  )
}