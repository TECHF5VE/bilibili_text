import * as React from 'react';
import * as style from './style.scss';
import First from './Extension';
import Third from './Live';
import Top from './Top';
import Fourth from './Animation';
import TwentyFifth from './Recommend';
import Fifth from './FolkOpera';

export default function Body() {
  return (
    <div className={style.a}>
      <Top />
      <First />
      <Third />
      <Fourth />
      <Fifth tag="番剧" id="Fifth" />
      <TwentyFifth tag="特别推荐" />
    </div>
  );
}
