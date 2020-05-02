import React from "react";
import * as style from "./style.scss";
import img1 from "./node_modules/src/images/component1.jpg";
import img2 from "./node_modules/src/images/component2.jpg";
import { Icon, Tooltip } from "antd";
import { Link } from "web-router";
import useFetch from "src/useFetch/usePost";
// import useFetch from "src/useFetch";

// 每个小方块
export default function Component(props:{value:string}) {
const {data,revalidate}=useFetch({
   path:"user/watchLater/add",
   method:"post",
  request:{id:123456,content:props.value}
 })
  return <div className={style.box}>
    <Link to="/playPage/" className={style.picture}>
      <div className={style.noHidden}>
        <div className={style.img}><img src={img2} id="img" width="190px" height="120px" /></div>
        <div className={style.title}>
          <Icon type="play-circle" onClick={revalidate}/>
        </div>
      </div>
      <div className={style.hidden}>
        <div className={style.img}><img src={img1} width="190px" height="120px" /></div>
        <div>
          <Tooltip placement="topRight" title={data?.success?"添加成功":'稍后再看'} mouseEnterDelay={0} className={style.fontSize} >
            <Icon type="play-circle" onClick={revalidate} className={style.title} />
          </Tooltip>
        </div>

        <div className={style.icon1}><Icon type="team" />999</div>
        <div className={style.icon2}><Icon type="like" />999</div>
      </div>
    </Link>
    <a>
      <div className={style.txt}>
        <span className={style.dir}>一些有用的介绍</span><br />
        <span className={style.tip}>UP·学习</span>
      </div>
    </a>
  </div >
}
