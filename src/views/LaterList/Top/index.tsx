import React from "react";
import * as style from "./style.scss";
import { Button } from "antd";
import img from "src/images/img9.png";
import { Input } from 'antd';

const { Search } = Input;
export default function Top(props: { num: number, value: [], allRemove: (event: React.MouseEvent<any, MouseEvent>) => void }) {
  return <div className={style.main}>
      <div className={style.left}>
        <img className={style.img} src={img} width="30px" height="30px" /><span>稍后再看 ({props.num}/100)</span>
      </div>
      <div>
        <Search placeholder="input search text" enterButton={true} style={{ width: 300 }} />
      </div>
      <div className={style.right}>
        <Button type="primary" className={style.button} >全部播放</Button>
        <Button type="primary" className={style.button} onClick={props.allRemove}>一键清空</Button>
        <Button type="primary" className={style.button}>移除已观看视频</Button>
      </div>
    </div>
}