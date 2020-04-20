import React from "react";
import * as style from "./style.scss";
import Top from "./Top";
import img1 from "../img1.jpg";
import img2 from "./img1.png";
import useGet from "src/useGet";
 import useFetch from "src/useFetch";

export default function TodoList() {
 const [paths,setPaths]=React.useState('/user/watchLater')
 const {data,revalidate}=useFetch({
  path:"user/watchLater/allRemove",
  method:"post",
 request:{id:123456,removeAll:true}
   })
   const removeAll=function(){
     revalidate();
     setPaths(data?.path)
   }
  const { datas,error } = useGet(paths)
  return <>{
  error?
  <div>failed to load</div>
  :
  !datas?
  <div>loading...</div>
  :
   <div className={style.box}>
      <Top num={datas.items.length} value={datas.items} allRemove={removeAll}/>
      <div className={style.ul}>
        <ul className={style.ul}>
          {datas.items.map((v:{}, i: number) => <li className={style.li} key={i}>{i + 1}
            <div className={style.img}><img src={img1} width="170px" height="110px" /></div>
            <div className={style.content}>
              <div className={style.text}>
                <div className={style.title}>
                  {datas.items[i].title}
                </div>
                <div className={style.span}>{datas.items[i].content}</div>
              </div>
              <img src={img2} width="22px" height="25px" />
            </div>
          </li>)}
        </ul>
      </div>
    </div>
}</>
}
