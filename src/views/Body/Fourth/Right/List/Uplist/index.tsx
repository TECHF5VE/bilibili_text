import React from "react";
import { Popover } from "antd";
import* as style from "./style.scss";
import Upcontent from "./Upcentent";

export default function Uplist(props: any) {
  return <div>
    <Popover content={<Upcontent />} title={null}>
      <div className={style.box}>
        <span className={style.number}>{props.tag}</span>
        <span>这个东西很有趣呦！balabala--++</span>
      </div>
    </Popover>
  </div>
}