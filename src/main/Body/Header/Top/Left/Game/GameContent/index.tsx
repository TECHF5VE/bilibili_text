import * as React from 'react';
import * as style from './style.scss';
import GameItem from './GameItem';

export default function GameContent () {
  return (
    <div className={style.a}>
      <GameItem tag="游戏一" />
      <GameItem tag="游戏二" />
    </div>
  );
}
