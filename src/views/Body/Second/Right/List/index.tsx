import React from "react";
import * as style from "./style.scss";
import { Avatar, Icon } from 'antd';

export default function List() {
  return <div className={style.box}>
    <a href="" className={style.child1}>
      <div className={style.num}> 01</div>
      <Avatar size="large" icon="user" />
      <div>
        <span className={style.text}>吴大佬</span><br />
        <span className={style.dir}>一些有用的介绍</span>
      </div>
      <div className={style.icon}><Icon type="team" />999</div>
    </a>
    <a href="" className={style.child}>
      <div className={style.num}> 02</div>
      <Avatar size="large" icon="user" />
      <div>
        <span className={style.text}>小伙伴</span><br />
        <span className={style.dir}>一些有用的介绍</span>
      </div>
      <div className={style.icon}><Icon type="team" />888</div>
    </a>
    <a href="" className={style.child}>
      <div className={style.num}> 03</div>
      <Avatar size="large" icon="user" />
      <div>
        <span className={style.text}>哈默默</span><br />
        <span className={style.dir}>一些有用的介绍</span>
      </div>
      <div className={style.icon}><Icon type="team" />666</div>
    </a>
    <a href="" className={style.child}>
      <div className={style.num1}> 4</div>
      <Avatar size="large" icon="user" />
      <div>
        <span className={style.text}>路人甲</span><br />
        <span className={style.dir}>一些有用的介绍</span>
      </div>
      <div className={style.icon}><Icon type="team" />666</div>
    </a>
    <a href="" className={style.child}>
      <div className={style.num1}> 5</div>
      <Avatar size="large" icon="user" />
      <div>
        <span className={style.text}>路人乙</span><br />
        <span className={style.dir}>一些有用的介绍</span>
      </div>
      <div className={style.icon}><Icon type="team" />666</div>
    </a>
    <a href="" className={style.child}>
      <div className={style.num1}> 6</div>
      <Avatar size="large" icon="user" />
      <div>
        <span className={style.text}>路人丙</span><br />
        <span className={style.dir}>一些有用的介绍</span>
      </div>
      <div className={style.icon}><Icon type="team" />666</div>
    </a>
  </div>
}