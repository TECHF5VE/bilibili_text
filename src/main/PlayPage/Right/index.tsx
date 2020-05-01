import React from "react";
import * as style from './style.scss';
import { Avatar, Button } from "antd";
import Item from "./Item";

export default function Right() {
  return <div className={style.box}>
    <div className={style.user}>
      <Avatar size={52} icon="user" />
      <div className={style.word}>
        <div>哈默默</div>
        <div className={style.dir}>微博@哈默默</div>
      </div>
    </div>
    <Button type="primary" className={style.follow}>+ 关注 99999</Button>
    <h1 className={style.tip}>相关推荐</h1>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </div>
}
