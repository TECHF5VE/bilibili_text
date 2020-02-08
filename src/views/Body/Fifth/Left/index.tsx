import * as React from "react";

import * as style from "./style.scss";
import Up from "./Up";


export default function Left(props:any){
    return <div className={style.a}>
    <Up tag={props.tag} />
    
    </div>
}
