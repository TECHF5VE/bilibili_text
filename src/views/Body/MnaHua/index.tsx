import * as React from "react";
import * as style from "./style.scss";
import Left from "./Left";
import Right from "./Right";

export default function First(){
    return <div className={style.main}>
      <Left />
      <Right />
    </div>
    }