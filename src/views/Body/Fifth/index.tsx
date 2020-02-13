import * as React from "react";

import * as style from "./style.scss";
import Left from "./Left";
import Right from "./Right";

export default function Fifth(props:{ tag: string; id: string; }){
    return <div className={style.a} id={props.id}>
    <Left tag={props.tag} />
    <Right />
    </div>
}