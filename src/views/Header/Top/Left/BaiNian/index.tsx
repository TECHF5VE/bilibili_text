import * as React from "react";
import * as style from "./style.scss";

export default function BaiNian() {
  return (
  <div className={style.box}>
    <div className={style.minBox}>
      <a href="#" className={style.moveCentext}>拜年祭</a>
      <a href="#" className={style.moveCentext}><img src="img-1.png" className={style.move}/></a>
      <a href="#" className={style.moveCentext}>拜年祭</a>
    </div>
  </div>
  )
}