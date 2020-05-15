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
import Navication from './Navication';

export default function Body() {
  const [move, setMove] = React.useState(null)
  const handleWheel = React.useCallback(() => {
    console.log(1)
    setMove(window.scrollY)
  }, [move]) 
  return (
    <div onWheel={handleWheel}>
      <Header />
      <div className={style.a}>
        <Navication moves={move} handleMove={setMove}/>
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
