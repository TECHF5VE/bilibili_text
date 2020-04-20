import React from "react";
import * as style from "./style.scss";
import Top from "./Top";
import img1 from "../img1.jpg";
import img2 from "./img1.png";
import useGet from "src/useGet";
 import useFetch from "src/useFetch";

export default function TodoList(props: { value: any; }) {
 const [paths,setPaths]=React.useState('/user/watchLater')
 const {datas,revalidata}=useFetch({
  path:"public/mock/user/watchLater",
  method:"post",
 request:{id:123456,content:props.value}
   })
   const removeAll=function(){
     revalidata();
     setPaths(datas?.path)
   }
  const { data,error } = useGet('/user/watchLater')
  return <>{
  error?
  <div>failed to load</div>
  :
  !data?
  <div>loading...</div>
  :
   <div className={style.box}>
      <Top num={data.items.length} value={data.items} allRemove={removeAll}/>
      <div className={style.ul}>
        <ul className={style.ul}>
          {data.items.map((v:{}, i: number) => <li className={style.li} key={i}>{i + 1}
            <div className={style.img}><img src={img1} width="170px" height="110px" /></div>
            <div className={style.content}>
              <div className={style.text}>
                <div className={style.title}>
                  {data.items[i].title}
                </div>
                <div className={style.span}>{data.items[i].content}</div>
              </div>
              <img src={img2} width="22px" height="25px" />
            </div>
          </li>)}
        </ul>
      </div>
    </div>
}</>
}
