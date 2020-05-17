import React from "react";
import * as style from './style.scss';

export default function Navication() {
  const [move, setMove] = React.useState<number>(null);
  const styles = function (v: number) {
    if (move === v) {
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
  const renderStyle = function () {
    if (window.scrollY >= 320 && window.scrollY < 720) {
      setMove(0);
    } else if (window.scrollY >= 720 && window.scrollY < 1200) {
      setMove(1);
    } else if (window.scrollY >= 1200 && window.scrollY < 1760) {
      setMove(2);
    } else if (window.scrollY >= 1760 && window.scrollY < 2100) {
      setMove(3);
    } else if (window.scrollY >= 2100) {
      setMove(4);
    } else if (window.scrollY < 320) {
      setMove(null);
    }
  }

  const [list, setList] = React.useState(['推广', '直播', '动画', '番剧', '推荐']);
  const [idList, setIdList] = React.useState(['#Extension', '#Live', '#Animation', '#FolkOpera', '#Recommend']);
  const [drag, setDrag] = React.useState(false)
  let item1: string;
  let item2: string;
  let flag1: number;
  let flag2: number;
  const handleClick = React.useCallback(() => {
    console.log(drag)
    if(drag){
      setDrag(false);
    }else{
      setDrag(true);
    }
  }, [drag])
  const handleStyle = function (a:boolean) {
    if (a) {
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
  const handleDragStart = function (a: number) {
    item1 = list[a];
    item2 = idList[a];
    flag1 = a;
    flag2 = a;
  };
  const handleDrop = (a: number) => {
    const temp1 = list[a];
    const temp2 = idList[a];
    list[a] = item1;
    idList[a] = item2;
    list[flag1] = temp1;
    idList[flag2] = temp2;
    setIdList(idList)
    setList([...list])
    console.log(list)
  }

  function banDefault(event: any) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  React.useEffect(() => {
    const li = document.querySelectorAll('li');
    document.addEventListener('scroll', renderStyle);
    // document.removeEventListener('scroll',renderStyle);
    for (let i = 0; i < 5; i++) {
      li[i].addEventListener('dragover', banDefault, false)
      li[i].addEventListener('dragenter', banDefault, false)
    }
  }, [list]);
  console.log(list + '123')
  return <div className={style.box}>
    <div className={style.ears}>
      <div className={style.leftEar}></div>
      <div className={style.rightEar}></div>
    </div>
    <ul className={style.ul}>
      {list.map((item: string, v: number) =>
        <a href={idList[v]} key={v}  >
          <li draggable={drag} onDragStart={() => handleDragStart(v)} onDrop={() => handleDrop(v)} style={styles(v)} className={style.li}>{item}</li>
        </a>)}
      <a onClick={handleClick}><li className={style.li} style={handleStyle(drag)}>↑↓</li></a>
      <a href="#" ><li className={style.li}>^</li></a>
    </ul>
  </div>
}