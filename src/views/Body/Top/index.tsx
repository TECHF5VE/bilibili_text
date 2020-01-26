import * as React from "react";
import * as style from "./style.scss";
import img from "./img1.png";
import { Carousel } from 'antd';
import Upwait from "./Upwait";


export default function Top() {
  return <div className={style.box}>
    <div className={style.left}>
      <Carousel autoplay={true} dots={true} dotPosition="bottom">
        <div className={style.picture1}>
          <a href="">
            <p>这是一个p元素，给它设置了绝对定位</p>
            {/* <img src={img} className={style.icon1} /> */}
          </a>
        </div>
        <div className={style.picture2}>
          <a href="">
            <p>让它做这张图片的description部分</p>
            {/* <img src={img} className={style.icon1} /> */}
          </a>
        </div>
        <div className={style.picture3}>
          <a href="">
            <p>给它设置top，让它下来一点</p>
            {/* <img src={img} className={style.icon1} /> */}
          </a>
        </div>
        <div className={style.picture4}>
          <a href="">
            <p>再给他设置left，它却没了</p>
            {/* <img src={img} className={style.icon1} /> */}
          </a>
        </div>
        <div className={style.picture5}>
          <a href="">
            <p>就设置了margin-left，他又可以了</p>
            {/* <img src={img} className={style.icon1} /> */}
          </a>
        </div>
      </Carousel>
    </div>
    <div className={style.right}>
      <div className={style.line1}>
       
        <div className={style.action} >
          <a href="" >
          <Upwait />
          <img src={img} className={style.icon2} />
        </a>
      </div>
      <div className={style.action}>
        <a href="">
          <img src={img} className={style.icon2} />
        </a>
      </div>
      <div className={style.action}>
        <a href="">
          <img src={img} className={style.icon2} />
        </a>
      </div>
      <div className={style.action}>
        <a href="">
          <img src={img} className={style.icon2} />
        </a>
      </div>
    </div>
    <div className={style.line1}>
      <div className={style.action}>
        <a href="">
          <img src={img} className={style.icon2} />
        </a>
      </div>
      <div className={style.action}>
        <a href="">
          <img src={img} className={style.icon2} />
        </a>
      </div>
      <div className={style.action}>
        <a href="">
          <img src={img} className={style.icon2} />
        </a>
      </div>
      <div className={style.action}>
        <a href="">
          <img src={img} className={style.icon2} />
        </a>
      </div>
    </div>
  </div>
  </div >
}