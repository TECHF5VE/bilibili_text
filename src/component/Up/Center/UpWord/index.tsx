import React from "react";
import { Popover } from "antd";
import * as style from "./style.scss";
import UploadItem from "./UploadItem";

export default function UpWord(props: { tag1: string; tag2: string; number: number }) {
  return <div className={style.box}>
    <Popover title={null} content={<UploadItem />} placement="topLeft">
      <a className={style.b}>{props.tag1}<span className={style.span}>{props.number}</span></a>
    </Popover>

    <Popover title={null} content={<UploadItem />} placement="bottomLeft">
      <a className={style.b}>{props.tag2}<span className={style.span}>{props.number}</span></a>
    </Popover>
  </div>
}