import React from "react";
import * as style from './style.scss';

export default function Navication(props: { moves: number,handleMove:React.Dispatch<any>}) {
  const content = ['推广', '直播', '动画', '番剧', '推荐'];
  const idList = ['#Extension', '#Live', '#Animation', '#FolkOpera', '#Recommend'];
  const styles = function (v: number) {
    if (props.moves > v * 520&&props.moves < (v + 1) * 520) {
      console.log(window.scrollY)
      return {
        backgroundColor: "rgb(86, 180, 209)",
        border: '0',
        color: 'white',
        transition: '0.3s'
      }
    } else {
      return {}
    }
  }
  const handleClick=React.useCallback(()=>{
    props.handleMove(window.scrollY)
    console.log(window.scrollY)
  },[props.moves]);
  return <div className={style.box}>
    <div className={style.ears}>
      <div className={style.leftEar}></div>
      <div className={style.rightEar}></div>
    </div>
    <ul className={style.ul}>
      {content.map((item: string, v: number) => <a href={idList[v]} key={v} onClick={props.handleMove}><li style={styles(v)} className={style.li}>{item}</li></a>)}
      <a href="#" onClick={handleClick}><li className={style.li}>^</li></a>
    </ul>
  </div>
}