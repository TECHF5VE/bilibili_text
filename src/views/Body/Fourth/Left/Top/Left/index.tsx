import React from "react";
import { Icon } from "antd";
import * as style from "./style.scss";


export default function Left(props:{tag:string}) {
  return<div className={style.left}>
      <div>
        <Icon type="play-square" className={style.iconB} />
        <a className={style.content}>{props.tag}</a>
      </div>
    </div>
}