import React from "react";
import { Video } from 'video-player'
import * as style from './style.scss'
import { Dropdown, Button, Menu } from "antd";

export default function Player(props: { src: string }) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer">
          1x
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer">
          2x
        </a>
      </Menu.Item>
      <Menu.Item>
        <a rel="noopener noreferrer">
          3x
        </a>
      </Menu.Item>
    </Menu>
  );
  console.log(props.src)
  return <div>
    <div className={style.video}><Video  src='http://www.hamomo.top/videos/小女孩.mp4' size={800} post='default' pre='auto' />
      <Dropdown className={style.drop} overlay={menu} placement="topCenter">
        <Button>1x</Button>
      </Dropdown>
      </div>
  </div>
}