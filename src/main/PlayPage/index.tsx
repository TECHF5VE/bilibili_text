import React from "react";
import * as style from './style.scss';
import Right from "./Right";
import Top from "src/main/Body/Header/Top";
import Left from "./Left";

export default function PlayPage(props:{title:string,src:string}) {
  return <div className={style.box}>
    <Top />
    <div className={style.main}>
      <Left title={props.title} src={props.src} />
      <Right />
    </div>
  </div>
}