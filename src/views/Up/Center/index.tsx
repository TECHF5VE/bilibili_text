import * as React from "react";
import * as style from "./style.scss";
import UpWord from "./UpWord";

export default function Center() {
   return <div className={style.a}>
     <UpWord tag1="动画" tag2="番剧" number={999}/>
     <UpWord tag1="音乐" tag2="国创" number={999}/>
     <UpWord tag1="舞蹈" tag2="游戏" number={999}/>
     <UpWord tag1="科技" tag2="数码" number={999}/>
     <UpWord tag1="生活" tag2="鬼畜" number={999}/>
     <UpWord tag1="时尚" tag2="广告" number={999}/>
     <UpWord tag1="娱乐" tag2="影视" number={999}/>
     <UpWord tag1="放映厅" tag2="更多 >" number={999}/>
   </div>
}
