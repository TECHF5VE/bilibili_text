import * as React from "react";
import Left from "./Left";
import Right from "./Right";
import * as style from "./style.scss";

export default function Animation(){
return <div className={style.main} id="Animation">
  <Left />
  <Right />
</div>
}