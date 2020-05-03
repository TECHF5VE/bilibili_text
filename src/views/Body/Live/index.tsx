import * as React from "react";
import Left from "./Left";
import Right from "./Right";
import * as style from "./style.scss";

export default function Third(){
return <div className={style.main} id="Third">
  <Left />
  <Right />
</div>
}