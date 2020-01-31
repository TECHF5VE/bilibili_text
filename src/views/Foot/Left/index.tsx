import React from "react";
import * as style from "./style.scss";
import Compent from "../Center/Compent";

export default function Center() {
  return <div className={style.box}>
    <div className={style.top}>bilibili</div>
    <div className={style.line}>
      <Compent tag="关于我们" />
      <Compent tag="加入我们" />
      <Compent tag="bilibili认证" />
    </div>
    <div className={style.line}>
      <Compent tag="联系我们" />
      <Compent tag="友情链接" />
      <Compent tag="Investor Relations" />
    </div>
    <div className={style.line}>
      <Compent tag="用户协议" />
      <Compent tag="隐私政策" />
    </div>

  </div>
}