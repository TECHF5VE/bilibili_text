import * as React from "react";
import * as style from "./style.scss";
import First from "./First";
import Top from "./Top";
import Second from "./Second";

export default function Body() {
  return <div className={style.a}>
    <Top />
    <First />
    <Second />
  </div>
}