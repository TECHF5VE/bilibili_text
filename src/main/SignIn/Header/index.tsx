import React from "react";
import Top from "src/main/Body/Header/Top";
import * as style from "./style.scss";
import img from "src/images/img7.png";

export default function Header(props:{tag:string;}){
  return <div className={style.box}>
    <Top />
    <img src={img} width="100%" height="100%" />
    <div className={style.tip}>
      <hr className={style.hr}/><span className={style.context}>{props.tag}</span><hr className={style.hr}/>
    </div>
  </div>
}