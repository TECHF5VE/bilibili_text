import * as React from "react";
import * as style from "./style.scss";
import { Carousel } from 'antd';

export default function RightX() {
  return <div className={style.left}>
      <Carousel autoplay={true} dots={true} >
        <div className={style.picture1}>
          <a>
            <p className={style.tip}>这是我复制来的</p>
          </a>
        </div>
        <div className={style.picture2}>
          <a>
            <p className={style.tip}>1433223</p>
          </a>
        </div>
        <div className={style.picture3}>
          <a>
            <p className={style.tip}>233133上天</p>
          </a>
        </div>
      </Carousel >
    </div>
}
