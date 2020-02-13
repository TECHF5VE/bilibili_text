import React from "react";
import * as style from "./style.scss";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import { Icon, Tooltip } from "antd";
import { CounterContext } from "./CounterContext";

export default function Component(props: { value: string }) {
  const { list, setList } = React.useContext(CounterContext);

  const addListItem = React.useCallback(() => setList([...list, props.value]), [list, props.value]);
  return <div className={style.box}>
    <a className={style.picture}>
      <div className={style.noHidden}>
        <div className={style.img}><img src={img2} id="img" width="190px" height="120px" /></div>
        <div className={style.title}>
          <Tooltip placement="top" title="Prompt Text">
            <Icon type="play-circle"/>
          </Tooltip>
        </div>
      </div>
      <div className={style.hidden}>
        <div className={style.img}><img src={img1} width="190px" height="130px" /></div>
        <div className={style.title}>
          <Tooltip placement="top" title="稍后再看">
            <Icon type="play-circle" onClick={addListItem} />
          </Tooltip>
        </div>
        <div className={style.icon1}><Icon type="team" />999</div>
        <div className={style.icon2}><Icon type="like" />999</div>
      </div>
    </a>
    <a>
      <div className={style.txt}>
        <span className={style.dir}>一些有用的介绍</span><br />
        <span className={style.tip}>UP·学习</span>
      </div>
    </a>
  </div>
}
