import * as style from "./style.scss"
import React from "react"

export default function Transtion() {
  let control: NodeJS.Timeout
  // 定义需要修改的DOM
  const box = React.useRef(null);
  // 循环播放的开关
  const [timer, setTimer] = React.useState(true)
  // 是否渲染的标识
  const [play, setPlay] = React.useState(0);
  // 控制DOM移动
  const go = function () {
    box.current.style.left = play * -600 + 'px';
  }
  // 下一页
  // 因为play的上下依赖，使用函数为setPlay传值，消除异步
  const handleNext = function () {
    setPlay((state) => state === 6 ? 0 : state + 1);
  }
  // 上一页
  const handlePrev = function () {
    setPlay((state) => state === 0 ? 6 : state - 1);
  }
  // 下方标识的跳转
  const slector = function (ip: number) {
    setPlay(ip)
  }
  // 循环函数
  const start = function () {
    control = setInterval(handleNext, 2000);
  }
  // 控制渲染
  React.useEffect(() => {
    // 确定网页加载完成时轮播图的初始位置
    go();
    // 执行循环函数
    if (timer) {
      start()
    }
    // 关闭再次渲染时重新执行循环函数
    setTimer(false)
    console.log(1)
  }, [play]);
  // 下方标识的被选中时的style
  const spans = {
    background: 'orangered'
  }
  return <div>
    <h1>用HTML写的轮播图</h1>
    {/* 鼠标悬停的函数不起作用，努力修复中 */}
    <div className={style.container} onMouseOver={() => clearInterval(control)}>
      <div ref={box} className={style.list}>
        <div className={style.item1}></div>
        <div className={style.item2}></div>
        <div className={style.item3}></div>
        <div className={style.item4}></div>
        <div className={style.item5}></div>
        <div className={style.item6}></div>
        <div className={style.item7}></div>
      </div>
      <div className={style.buttons}>
        {/* 三元运算符判断需要渲染的DOM，
            事件处理函数利用箭头函数传递参数（直接传不进去）*/}
        {play === 0 ? <span style={spans} /> : <span onClick={() => slector(0)} />}
        {play === 1 ? <span style={spans} /> : <span onClick={() => slector(1)} />}
        {play === 2 ? <span style={spans} /> : <span onClick={() => slector(2)} />}
        {play === 3 ? <span style={spans} /> : <span onClick={() => slector(3)} />}
        {play === 4 ? <span style={spans} /> : <span onClick={() => slector(4)} />}
        {play === 5 ? <span style={spans} /> : <span onClick={() => slector(5)} />}
        {play === 6 ? <span style={spans} /> : <span onClick={() => slector(6)} />}
      </div>
      <a className={style.prev} onClick={handlePrev}>&lt;</a>
      <a className={style.next} onClick={handleNext}>&gt;</a>
    </div>
  </div>
}