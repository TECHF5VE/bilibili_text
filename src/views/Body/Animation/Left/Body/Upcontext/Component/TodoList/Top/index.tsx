import React from "react";
import * as style from "./style.scss";
import { Button } from "antd";
import img from "./img.png";
import { CounterContext } from "../../CounterContext";
import { Input } from 'antd';

const { Search } = Input;
export default function Top(props: { number: number }) {
  const { list, setList } = React.useContext(CounterContext);
  const removeAll = React.useCallback(() => { setList([]) }, [])
  const temp=['']
  // const [temp, setTemp] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const handleValue = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [inputValue])

  //添加待选项（暂无用）
  const addOptions = React.useCallback(() => {
 
    list.map((item: string) => {
      // console.log(item)
      // console.log(inputValue==item)
      // console.log(inputValue)
      if (item.includes(inputValue)) {
        
        temp.push(item)
      }
    });
    // console.log(temp)
  }, [inputValue,list,temp])
  function change(e: React.ChangeEvent<HTMLInputElement>) {
    handleValue(e)
    addOptions()
  }

  //返回搜索结果
  const handleResult = React.useCallback(() => {
    list.map((item: string) => {
      if (item.includes(inputValue)) {
        temp.push(item)
      }
    });
    temp.shift()
    console.log(temp)
    setList(temp)
    console.log(list)
  }, [list,temp])
  return <div className={style.box}>
    <div className={style.left}>
      <img className={style.img} src={img} width="30px" height="30px" /><span>稍后再看 ({props.number}/100)</span>
    </div>
    <div>
      <Search placeholder="input search text" value={inputValue} enterButton={true} style={{ width: 300 }}
        onChange={change} onSearch={handleResult} />
      {/* <ul className={style.ul}>{temp.map((Item: string, i: number) => <li className={style.li} key={i} >{Item}</li>)}</ul> */}
    </div>
    <div className={style.right}>
      <Button type="primary" className={style.button} >全部播放</Button>
      <Button type="primary" className={style.button} onClick={removeAll}>一键清空</Button>
      <Button type="primary" className={style.button}>移除已观看视频</Button>
    </div>
  </div>
}