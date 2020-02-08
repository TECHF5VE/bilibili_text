import * as React from "react";
import * as style from "./style.scss";
import Left from "./Left";
import Right from "../Fourth/Right";

export default function Seventh(){
    return <div className={style.main} id="Seventh">
      <Left />
      <Right />
    </div>
    }