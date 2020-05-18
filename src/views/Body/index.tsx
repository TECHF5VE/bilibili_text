import * as React from 'react';
import * as style from './style.scss';
import Extension from './Extension';
import Live from './Live';
import Top from './Top';
import Animation from './Animation';
import Recommend from './Recommend';
import FolkOpera from './FolkOpera';
import Header from 'src/component/Header';
import Foot from '../../component/Foot';
import Up from 'src/component/Up';
import Navication from './Navigation';

export default function Body() {
  return (
    <div>
      <Header />
      <div className={style.a}>
        <Navication />
        <Up />
        <Top />
        <Extension />
        <Live />
        <Animation />
        <FolkOpera />
        <Recommend />
      </div>
      <Foot />
    </div>
  );
}
