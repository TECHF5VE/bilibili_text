import * as React from "react";
import * as style from "./style.scss";
import Left from "./Left";
import Right from "./Right";

export default function FolkOpera(){
    return <div className={style.a} id='FolkOpera'>
    <Left />
    <Right />
    </div>
}