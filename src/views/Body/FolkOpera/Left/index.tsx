import * as React from "react";

import * as style from "./style.scss";
import Up from "./Up";


export default function Left(props:{ tag: string}){
    return <div className={style.a}>
    <Up tag={props.tag} />
    
    </div>
}
