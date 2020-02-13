import React from "react";
import * as style from "./style.scss";
import { Button } from "antd";
import img from "./img.png";
import { CounterContext } from "../../CounterContext";

export default function Top(props:{number:number}) {
  const {setList } = React.useContext(CounterContext);
  const removeAll=React.useCallback(()=>{setList([])},[])
  return <div className={style.box}>
    <div className={style.left}>
      <img className={style.img} src={img} width="30px" height="30px"/><span>稍后再看 ({props.number}/100)</span>
    </div>
    <div className={style.right}>
      <Button type="primary" className={style.button} >全部播放</Button>
      <Button type="primary" className={style.button} onClick={removeAll}>一键清空</Button>
      <Button type="primary" className={style.button}>移除已观看视频</Button>
    </div>
  </div>
}