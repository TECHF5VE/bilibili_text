import React from "react";
import * as style from './style.scss';

export default function Navication() {
  return <div className={style.box}>
    <div className={style.ears}>
      <div className={style.leftEar}></div>
      <div className={style.rightEar}></div>
    </div>
    <ul className={style.ul}>
      <a href="#Extension"><li className={style.li}>推广</li></a>
      <a href="#Live"><li className={style.li}>直播</li></a>
      <a href="#Animation"><li className={style.li}>动画</li></a>
      <a href="#FolkOpera"><li className={style.li}>番剧</li></a>
      <a href="#Recommend"><li className={style.li}>推荐</li></a>
      <a href="#"><li className={style.li}>^</li></a>
    </ul>
  </div>
}