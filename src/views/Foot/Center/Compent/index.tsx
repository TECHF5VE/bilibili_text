import React from "react";
import * as style from "./style.scss";

export default function Compent(props: any) {
  return <div className={style.box}>
    <a>{props.tag}</a>
  </div>
}