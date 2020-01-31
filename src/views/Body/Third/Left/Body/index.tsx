import * as React from "react";
import * as style from "./style.scss";
import Compent from "./Compent";

export default function Body() {
  return <div className={style.main}>
    <div className={style.line}>
      <Compent />
      <Compent />
      <Compent />
      <Compent />
      <Compent />
    </div>
    <div className={style.line}>
      <Compent />
      <Compent />
      <Compent />
      <Compent />
      <Compent />
    </div>
  </div>

}