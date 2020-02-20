import React from "react";
import * as style from "./style.scss";
import Top from "./Top";
import img1 from "../img1.jpg";
import img2 from "./img1.png";
import { CounterContext } from "../CounterContext"


function CounterConsumer() {
  const { list, setList } = React.useContext(CounterContext);
  const removeListItem = React.useCallback((index: number) => () => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }, [list, setList]);
  return <div className={style.box}>
    <Top num={list.length} />
    <div className={style.ul}>
      <ul className={style.ul}>
        {list.map((v: {}, i: number) => <li className={style.li} key={i}>{i + 1}
          <div className={style.img}><img src={img1} width="170px" height="110px" /></div>
          <div className={style.content}>
            <div className={style.text}>
              <div className={style.title}>
                {v}
              </div>
              <div className={style.span}>{v}</div>
            </div>
            <img src={img2} width="22px" height="25px" onClick={removeListItem(i)} />
          </div>
        </li>)}
      </ul>
    </div>
  </div>
}
export default function TodoList() {
  return (
    <CounterConsumer />
  )
}