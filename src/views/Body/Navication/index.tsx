import React from "react";
import * as style from './style.scss';

export default function Navication() {
  const content = ['推广', '直播', '动画', '番剧', '推荐'];
  const idList = ['#Extension', '#Live', '#Animation', '#FolkOpera', '#Recommend'];
  const [move,setMove]=React.useState<number>(null)
  const styles = function (v: number) {
    if (move===v) {
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
  const renderStyle=function(){
    console.log(window.scrollY)
    if(window.scrollY>=320&&window.scrollY<720){
      setMove(0);
    }else if(window.scrollY>=720&&window.scrollY<1200){
      setMove(1);
    }else if(window.scrollY>=1200&&window.scrollY<1760){
      setMove(2);
    }else if(window.scrollY>=1760&&window.scrollY<2100){
      setMove(3);
    }else if(window.scrollY>=2100){
      setMove(4);
    }else if(window.scrollY<320){
      setMove(null);
    }
  }
React.useEffect(()=>{
  document.addEventListener('scroll',renderStyle)
})
  const handleClick = React.useCallback((num: number) => {
    styles(num)
  }, []);
  return <div className={style.box}>
    <div className={style.ears}>
      <div className={style.leftEar}></div>
      <div className={style.rightEar}></div>
    </div>
    <ul className={style.ul}>
      {content.map((item: string, v: number) => <a href={idList[v]} key={v} onClick={() => handleClick(v * 520)}><li style={styles(v)} className={style.li}>{item}</li></a>)}
      <a href="#" onClick={() => handleClick(0)}><li className={style.li}>^</li></a>
    </ul>
  </div>
}