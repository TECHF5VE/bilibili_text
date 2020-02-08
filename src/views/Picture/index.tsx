import React from "react";
import { Affix } from "antd";
import * as style from "./style.scss";
import img from "./Xiao.png";

export default function Picture() {

  return <div className={style.box}>

    <Affix offsetTop={400}>
      <img src={img}/>
    </Affix>
  </div>
}