import React from "react";
import * as style from "./style.scss";
import Uplist from "./Uplist";


export default function List() {
  return <div className={style.box}>
    <Uplist tag="1"/>
    <Uplist tag="2"/>
    <Uplist tag="3"/>
    <Uplist tag="4"/>
    <Uplist tag="5"/>
    <Uplist tag="6"/>
    <Uplist tag="7"/>
    <Uplist tag="8"/>
    <Uplist tag="9"/>
    <Uplist tag="10"/>
  </div>
}