import Draggable from 'react-draggable'

export default function DesktopIcon({name, url}) {

    const ClickDesktopIcon = (name, url) =>{
        window.open(url, '_blank', 'noreferrer');
    }

  return (
    <Draggable  
        defaultPosition={{x: 0, y:0}}
        grid={[1,1]}
        handle=".DesktopIcon"
        cancel=".ActionNav"
        bounds="#root"
      >
        <div className='DesktopIcon' onDoubleClick={() => ClickDesktopIcon(name, url)}>
            <img className='DesktopIcon-logo' src={`img/desktop/${name}.png`} />
            <h2 className='DesktopIcon-title'>{name}</h2>
        </div>
    </Draggable>
  )
}
