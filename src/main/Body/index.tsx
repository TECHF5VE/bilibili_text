import * as React from 'react';
import * as style from './style.scss';
import First from './Extension';
import Third from './Live';
import Top from './Top';
import Fourth from './Animation';
import TwentyFifth from './Recommend';
import Fifth from './FolkOpera';
import Header from './Header';
import Foot from './Foot';
import Up from './Up';

export default function Body() {
  return (
    <div>
      <Header />
      <div className={style.a}>
        <Up />
        <Top />
        <First />
        <Third />
        <Fourth />
        <Fifth tag="番剧" id="Fifth" />
        <TwentyFifth tag="特别推荐" />
      </div>
      <Foot />
    </div>
  );
}
