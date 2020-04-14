import React from "react";
import * as style from "./style.scss";
import Top from "./Top";
import img1 from "../img1.jpg";
import img2 from "./img1.png";
import useGet from "src/useGet";

export default function TodoList() {
  const { data,error } = useGet('/user/watchLater')
  return <>{
  error?
  <div>failed to load</div>
  :
  !data?
  <div>loading...</div>
  :
   <div className={style.box}>
      <Top num={data.item.length} value={data.item}/>
      <div className={style.ul}>
        <ul className={style.ul}>
          {data.item.map((v: {}, i: number) => <li className={style.li} key={i}>{i + 1}
            <div className={style.img}><img src={img1} width="170px" height="110px" /></div>
            <div className={style.content}>
              <div className={style.text}>
                <div className={style.title}>
                  {data.item[i].title}
                </div>
                <div className={style.span}>{data.item[i].content}</div>
              </div>
              <img src={img2} width="22px" height="25px" />
            </div>
          </li>)}
        </ul>
      </div>
    </div>
}</>
}
