import * as React from "react";
import * as style from "./style.scss";
import First from "./Extension";
import Second from "./NewYear";
import Third from "./Live";
import Top from "./Top";
import Fourth from "./Animation";
import Sixth from "./FolkOperaDynamic";
import Eighth from "./FolkOperaDynamic";
import Ninth from "./FolkOperaDynamic";
import Tenth from "./FolkOperaDynamic";
import Eleventh from "./FolkOperaDynamic";
import Thirteenth from "./FolkOperaDynamic";
import Fourteenth from "./FolkOperaDynamic";
import Fifteenth from "./FolkOperaDynamic";
import Sixteenth from "./FolkOperaDynamic";
import Seventeenth from "./FolkOperaDynamic";
import Eighteenth from "./FolkOperaDynamic";
import Nineteenth from "./FolkOperaDynamic";
import TwentyFirst from "./FolkOperaDynamic";
import TwentySecond from "./FolkOperaDynamic";
import TwentyThird from "./FolkOperaDynamic";
import TwentyFourth from "./FolkOperaDynamic";
import TwentyFifth from "./Recommend";
import Fifth from "./FolkOpera";
import Twelfth from "./FolkOpera";
import Seventh from "./Cartoon";
import Twentieth from "./SpecialColumn";

export default function Body() {
  return<div className={style.a}>
    <Top />
    <First />
    <Second />
    <Third />
    <Fourth />
    <Fifth tag="番剧" id="Fifth" />
    <Sixth tag="番剧动态" id="Sixth"/>
    <Seventh />
    <Eighth tag="音乐" id="Eighth" />
    <Ninth tag="舞蹈" id="Ninth" />
    <Tenth tag="游戏" id="Tenth" />
    <Eleventh tag="科技" id="Eleventh" />
    <Twelfth tag="国创" id="Twelfth" />
    <Thirteenth tag="国产原创相关" id="Thirteenth" />
    <Fourteenth tag="数码" id="Fourteenth" />
    <Fifteenth tag="生活" id="Fifteenth" />
    <Sixteenth tag="鬼畜" id="Sixteenth" />
    <Seventeenth tag="时尚" id="Seventeenth" />
    <Eighteenth tag="广告" id="Eighteenth" />
    <Nineteenth tag="娱乐" id="Nineteenth" />
    <Twentieth />
    <TwentyFirst tag="电影" id="TwentyFirst" />
    <TwentySecond tag="电视剧" id="TwentySecond" />
    <TwentyThird tag="影视" id="TwentyThird" />
    <TwentyFourth tag="电视剧" id="TwentyFourth" />
    <TwentyFifth tag="特别推荐" />
  </div>
}