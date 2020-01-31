import * as React from "react";
import * as style from "./style.scss";
import TuiGuang from "./TuiGuang";
import BaiNianJi from "./BaiNianJi";
import Third from "./Third";
import Top from "./Top";
import Fourth from "./Fourth";
import Sixth from "./Sixth";
import Eighth from "./Sixth";
import Ninth from "./Sixth";
import Tenth from "./Sixth";
import Eleventh from "./Sixth";
import Thirteenth from "./Sixth";
import Fourteenth from "./Sixth";
import Fifteenth from "./Sixth";
import Sixteenth from "./Sixth";
import Seventeenth from "./Sixth";
import Eighteenth from "./Sixth";
import Nineteenth from "./Sixth";
import TwentyFirst from "./Sixth";
import TwentySecond from "./Sixth";
import TwentyThird from "./Sixth";
import TwentyFourth from "./Sixth";
import TwentyFifth from "./TwentyFifth";

export default function Body() {
  return <div className={style.a}>
    <Top />
    <TuiGuang />
    <BaiNianJi />
    <Third />
    <Fourth />
    <Sixth tag="番剧动态"/>
    <Eighth tag="音乐"/>
    <Ninth tag="舞蹈"/>
    <Tenth tag="游戏"/>
    <Eleventh tag="科技"/>
    <Thirteenth tag="国产原创相关"/>
    <Fourteenth tag="数码"/>
    <Fifteenth tag="生活"/>
    <Sixteenth tag="鬼畜"/>
    <Seventeenth tag="时尚"/>
    <Eighteenth tag="广告"/>
    <Nineteenth tag="娱乐"/>
    <TwentyFirst tag="电影"/>
    <TwentySecond tag="电视剧"/>
    <TwentyThird tag="影视"/>
    <TwentyFourth tag="电视剧"/>
    <TwentyFifth />
  </div>
}