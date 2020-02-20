import React from "react";
import * as style from "./style.scss";

export default function UploadItem() {
  return <div className={style.box}>
    <div className={style.tip}>这是标题</div>
    <div className={style.content}>这是内容</div>
  </div>
}