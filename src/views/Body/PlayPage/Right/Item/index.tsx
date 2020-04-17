import React from "react";
import * as style from './style.scss';
import img from "../../../Animation/Left/Body/Upcontext/Component/img1.jpg";
import { Link } from "web-router";

export default function Item() {
  return <div className={style.box}>
    <div className={style.img}>
      <img src={img} alt="" width="180px" height="100px" />
    </div>
    <div className={style.word}>
      <div className={style.tip}>
        <Link to="">哈默默经典女装</Link>
      </div>
      <div className={style.dir}>
        手把手教学，包括汉服、jk制服等，包学包会，你值得拥有
      </div>
    </div>
  </div>
}