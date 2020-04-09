import * as style from "./style.scss"
import React from "react"

export default function Transtion() {
  let control: NodeJS.Timeout
  const box = React.useRef(null);
  const [timer, setTimer] = React.useState(true)
  const [play, setPlay] = React.useState(0);
  const go = function () {
    box.current.style.left = play * -600 + 'px';
  }
  const handleNext = function () {
    setPlay((state) => state === 6 ? 0 : state + 1);
  }
  const handlePrev = function () {
    setPlay((state) => state === 0 ? 6 : state - 1);
  }
  const start = function () {
    control=setInterval(handleNext, 2000);
    console.log(control)
  }
  const stop=function(){
    clearInterval(control)
    console.log(control)
  }
  React.useEffect(() => {
    go();
    if(timer){
      start()
    }
    setTimer(false)
    console.log('123')
    console.log(play)
  }, [play])
  const spans = {
    background: 'orangered'
  }
  return <div>
    <h1>用HTML写的轮播图</h1>
    <div className={style.container} onMouseOver={stop}>
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
        {play === 0 ? <span style={spans} /> : <span />}
        {play === 1 ? <span style={spans} /> : <span />}
        {play === 2 ? <span style={spans} /> : <span />}
        {play === 3 ? <span style={spans} /> : <span />}
        {play === 4 ? <span style={spans} /> : <span />}
        {play === 5 ? <span style={spans} /> : <span />}
        {play === 6 ? <span style={spans} /> : <span />}
      </div>
      <a className={style.prev} onClick={handlePrev}>&lt;</a>
      <a className={style.next} onClick={handleNext}>&gt;</a>
    </div>
  </div>
}