import * as React from "react";
import { Button, Icon } from "antd";
import * as style from "./style.scss";
import List from "../../../../component/BubbleList";

export default function Right (){
  return <div className={style.box}>
    <div className={style.top}>
      <span className={style.text}>排行榜</span>
      <div className={style.button}><Button type="primary" size="small">更多<Icon type="right" /></Button></div>
    </div>
    <div>
      <List />
    </div>
  </div>
}