import React from "react";
import Top from "../../Sixth/Left/Top";
import Compent from "../../Fourth/Left/Body/Compent";
import * as style from "./style.scss";

export default function Left (){
  return <div>
    <Top />
    <div className={style.line}>
      <Compent />
      <Compent />
      <Compent />
      <Compent />
      <Compent />
    </div>
  </div>
}