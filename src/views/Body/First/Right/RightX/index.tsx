import React from "react";
import * as style from "./style.scss";
import { Carousel } from 'antd';

export default function RightX() {
  return <div className={style.left}>
      <Carousel autoplay={true} dots={true} dotPosition="bottom">
        <div className={style.picture1}>
          <a>
            <p>这是我复制来的</p>
          </a>
        </div>
        <div className={style.picture2}>
          <a>
            <p>1433223</p>
          </a>
        </div>
        <div className={style.picture3}>
          <a>
            <p>233133上天</p>
          </a>
        </div>
      </Carousel >
    </div>
}
