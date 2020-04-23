import React from "react";
// import py from "src/videos/video1.mp4"

export default function Player(props: { src: string }) {

  let play
  const ba=React.useRef(null)
  const drop = React.useCallback((e: React.DragEvent<HTMLVideoElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const video = e.dataTransfer;
    const URL = window.URL || window.webkitURL;
    console.log(URL.createObjectURL(video.files[0]))
    play=URL.createObjectURL(video.files[0])
    ba.current.src=play
  }, [play])
  React.useEffect(() => {
    const ade = function (event: any) {
      event.preventDefault()
      event.stopPropagation();
      return false
    }
    const dropbox = document.getElementById("fil");
    dropbox.addEventListener('dragover', ade, false)
    dropbox.addEventListener('dragenter', ade, false)
  })
  return <div>
    <video controls width='800px' height="500px" preload="auto" onDrop={drop} id='fil' ref={ba} >
      <source src={props.src} />
    </video>
  </div>
}