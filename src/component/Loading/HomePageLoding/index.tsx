import React from "react";
import * as style from './style.scss';
import img from 'src/images/loading.gif';

export default function HomeLoading() {
  return <div className={style.box}>
    <div><img src={img} className={style.img}/></div>
    <div className={style.word}>努力加载中...</div>
  </div>
}