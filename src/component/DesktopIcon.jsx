import { useState } from 'react';
import Draggable from 'react-draggable'

export default function DesktopIcon({name, url}) {

    const [snap, setSnap] = useState([1,1])

    const ClickDesktopIcon = (name, url) =>{
        window.open(url, '_blank', 'noreferrer');
    }

    const snapGridStart = (event) =>{
      setSnap([1,1])
    }

    const snapGridStop = (event) =>{
      setSnap([100,100])
    }

  return (
    <Draggable  
        defaultPosition={{x: 0, y:0}}
        grid={snap}
        handle=".DesktopIcon"
        cancel=".ActionNav"
        bounds="#root"
        // onStart={snapGridStart}
        // onStop={snapGridStop}
      >
        <div className='DesktopIcon' onDoubleClick={() => ClickDesktopIcon(name, url)}>
            <img className='DesktopIcon-logo' src={`img/desktop/${name}.png`} />
            <h2 className='DesktopIcon-title'>{name}</h2>
        </div>
    </Draggable>
  )
}
