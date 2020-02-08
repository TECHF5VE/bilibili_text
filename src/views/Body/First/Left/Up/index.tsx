import * as React from "react";
import * as style from "./style.scss";
import img from "./Up2.png";
import rpg from "./Up1.png";
export default function Up(){
  
    return <div >
     <a href="#" > <img src={img}/></a>
     <a href="#" > <img src={rpg}/></a>
     <a href="#" className={style.c}>实时热点</a>
     <a href="#" > <img src={rpg}/></a>
     <a href="#" className={style.c}>实时热点</a>
    </div>
    }