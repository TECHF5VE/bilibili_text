import * as React from "react";

import * as style from "./style.scss";
import img from "./Img.png";
import { Icon } from "antd";


export default function Compent() {

    return <div className={style.a}>
        <a href="#" > <img src={img}/></a>
        <div className={style.d}><a href="#" className={style.b}>专栏名称</a>
        <a href="#" className={style.c}>up up主名字</a>
        <div className={style.f}>
        <div className={style.e}><Icon type="eye" />999  </div><div className={style.e}><Icon type="message" />999</div>
    </div></div></div>
        }