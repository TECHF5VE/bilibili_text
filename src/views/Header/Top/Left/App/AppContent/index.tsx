import * as React from 'react';
import * as style from './style.scss';
import GameItem from './AppItem';

export default function GameContent () {
  return (
    <div className={style.a}>
      <GameItem tag="扫码下载手机客户端" />
    </div>
  );
}
