import React from "react";
import * as style from "./style.scss";
import Icontip from "./Icontip";
import { Anchor } from "antd";

const { Link } = Anchor;
export default function Navigation() {
  return <div className={style.main}>
    <Anchor offsetTop={80}>
      <div className={style.box}>
        <Link className={style.link} href="#Third" title="直播" />
        <Link className={style.link} href="#Fourth" title="动画" />
        <Link className={style.link} href="#Fifth" title="番剧" />
        <Link className={style.link} href="#Seventh" title="漫画" />
        <Link className={style.link} href="#Eighth" title="音乐" />
        <Link className={style.link} href="#Ninth" title="舞蹈" />
        <Link className={style.link} href="#Tenth" title="游戏" />
        <Link className={style.link} href="#Eleventh" title="科技" />
        <Link className={style.link} href="#Twelfth" title="国创" />
        <Link className={style.link} href="#Fourteenth" title="数码" />
        <Link className={style.link} href="#Fifteenth" title="生活" />
        <Link className={style.link} href="#Sixteenth" title="鬼畜" />
        <Link className={style.link} href="#Seventeenth" title="时尚" />
        <Link className={style.link} href="#Eighteenth" title="广告" />
        <Link className={style.link} href="#Nineteenth" title="娱乐" />
        <Link className={style.link} href="#Twentieth" title="专栏" />
        <Link className={style.link} href="#TwentyFirst" title="电影" />
        <Link className={style.link} href="#TwentySecond" title="电视剧" />
        <Link className={style.link} href="#TwentyThird" title="影视" />
        <Link className={style.link} href="#TwentyFourth" title="纪录片" />
        <Link className={style.link} href="#" title={<Icontip />} />
      </div>
    </Anchor>
  </div>
}