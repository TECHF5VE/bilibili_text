import * as React from "react";
import * as style from "./style.scss";
import Top from "./Top";
import img from "src/images/img0.png";

const back={
    backgroundImage:'url('+img+')'
}

export default function Header(){
    return <div style={back} className={style.a}>
        <Top />
        </div>
    
}