import * as React from "react";
import * as style from "./style.scss";
import { Icon } from "antd";

export default function Upwait() {
  return <div className={style.box}>
    <div className={style.h4}>
      <div className={style.content}>猜猜这是什么！</div>
      <div className={style.bottom}>
        <div>up 哈默默<br />999万播放</div>
        <div>
          <Icon type="play-circle" className={style.icon} />
        </div>
      </div>
    </div>
  </div>

}