import React from "react";
import * as style from './style.scss';

export default function Navication(props:{moves:number}) {
  const content = ['推广', '直播', '动画', '番剧', '推荐',];
  const idList = ['#Extension', '#Live', '#Animation', '#FolkOpera', '#Recommend'];
  console.log(props.moves)
  const styles = function (v:number) {
    if (props.moves>(v+1)*100) {
      console.log(window.scrollY)
      return {
        backgroundColor: "rgb(86, 180, 209)"
      }
    } else {
      return {}
    }
  }
  return <div className={style.box}>
    <div className={style.ears}>
      <div className={style.leftEar}></div>
      <div className={style.rightEar}></div>
    </div>
    <ul className={style.ul}>
      {content.map((item: string, v: number) => <a href={idList[v]} key={v}><li style={styles(v)} className={style.li}>{item}</li></a>)}
      <a href="#"><li className={style.li}>^</li></a>
    </ul>
  </div>
}