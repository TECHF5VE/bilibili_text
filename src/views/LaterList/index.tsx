import React from 'react';
import * as style from './style.scss';
import Top from './Top';
import img1 from 'src/images/component1.jpg';
import useGet from 'src/useFetch/useGet';
import useFetch from 'src/useFetch/usePost';
import { Icon } from 'antd';

export default function TodoList() {
  const [paths, setPaths] = React.useState('/user/watchLater');
  const { data, revalidate } = useFetch({
    path: 'user/watchLater/allRemove',
    request: { id: 123456, removeAll: true }
  });
  const removeAll = function () {
    revalidate();
    setPaths(data?.path);
  };

  const { datas, error } = useGet(paths);
  return <>
    {error
      ? <div>failed to load</div>
      : !datas
        ? <div>loading...</div>
        : <div className={style.box}>
          <Top
            num={datas.items.length}
            value={datas.items}
            allRemove={removeAll}
          />
          <div className={style.ul}>
            <ul className={style.ul}>
              {datas.items.map((v: {}, i: number) => (
                <li className={style.li} key={i}>
                  {i + 1}
                  <div className={style.img}>
                    <img src={img1} width="170px" height="110px" />
                  </div>
                  <div className={style.content}>
                    <div className={style.text}>
                      <div className={style.title}>{datas.items[i].title}</div>
                      <div className={style.span}>{datas.items[i].content}</div>
                    </div>
                    <div title="删除" className={style.del}>
                      <Icon type="delete" className={style.img2} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    }
  </>
}
