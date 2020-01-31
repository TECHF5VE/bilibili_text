import * as React from "react";
import * as style from "./style.scss";
// import RightX from "./RightX";
// import Left from "./Left";
// import Center from "./Center";

export default function Right() {
  return <div className={style.main}>
    <ul className={style.line}>
      <li><a><div className={style.tip}>直播排行</div></a></li>
      <li><a><div className={style.tip}>关注的主播</div></a></li>
      <li><a><div className={style.tip}>为你推荐</div></a></li>
    </ul>
    {/* <RightX /> */}
  </div>
}