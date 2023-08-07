import { useContext, useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import Draggable from 'react-draggable';
import { WindowContext } from '../WindowContext';
import { ResizableBox } from 'react-resizable';

export default function Window({icon, title, children, index}) {

  const [status, setStatus] = useState('');
  const {allTask, animation, setAnimation, focus, setFocus, getViewportWidth} = useContext(WindowContext);
  const [position, setPosition] = useState(null);
  const [history, setHistory] = useState(null);
  const myRef = useRef();
  
  // Stop
  const handleDragStop = (e, ui) => {
    if(ui.x!=0 && ui.y !=0){
      setHistory({ x: ui.x, y: ui.y });    
      setPosition({ x: ui.x, y: ui.y });
    }     
    //setAnimation(true)
  };

  // Start
  const handleDragStart = () =>{
    setAnimation(false);
    setFocus(icon)
  }
 
  const minWidth = getViewportWidth()/2 < 250 ? 250 : getViewportWidth()/2;
  const minHeight = getViewportWidth()/4 < 300 ? 300 : getViewportWidth()/4;

  return (
    
      <Draggable  
        defaultPosition={{x: (getViewportWidth()/4), y: index*60}}
        position={position}
        grid={[1,1]}
        onStop={handleDragStop}
        onStart={handleDragStart} 
        handle=".NavBar"
        cancel=".ActionNav"
        bounds="#root"
      >
        <div 
          style={{
            width : minWidth,
            height : minHeight,
            minWidth : 250,
            minHeight : 300
          }}
          className={`Window ${allTask[icon]?.state} ${allTask[icon]?.name} ${animation && " transition"} ${icon == focus && "focus"}`}     
          id={allTask[icon]?.name.replace(/\s+/g, '')}
          ref={myRef}
        >
          <>
              <Navbar forwardRef={myRef.current} selector={allTask[icon]?.name.replace(/\s+/g, '')} title={allTask[icon].name} icon={icon} setStatus={setStatus} setPosition={setPosition} status={status} history={history}/>
              {children}
          </>
          </div>
      </Draggable>
  )
}


{/* <ResizableBox 
          width={minWidth} // Largeur initiale de la div redimensionnable
          height={minHeight} // Hauteur initiale de la div redimensionnable
          minConstraints={[250, 300]} // Dimensions minimales que la div peut atteindre
          resizeHandles={['s','e','w','se','sw']} // Poignée de redimensionnement (sud-est)
          className={`Window ${allTask[icon]?.state} ${allTask[icon]?.name} ${animation && " transition"} ${icon == focus && "focus"}`}     
          id={allTask[icon]?.name.replace(/\s+/g, '')}
          ref={myRef}
        >
          <>
              <Navbar forwardRef={myRef.current} selector={allTask[icon]?.name.replace(/\s+/g, '')} title={allTask[icon].name} icon={icon} setStatus={setStatus} setPosition={setPosition} status={status} history={history}/>
              {children}
          </>
          </ResizableBox> */}


          // useEffect(() => {
          //   // Sélectionne tous les éléments ayant la classe "react-resizable-handle"
          //   const resizableHandles = document.querySelectorAll('.react-resizable-handle');
          //   // Ajoute des écouteurs d'événements pour chaque élément
          //   resizableHandles.forEach((handle) => {
          //     handle.addEventListener('mouseenter', disableAnimation);
          //     handle.addEventListener('mouseleave', disableAnimation);
          //   });
        
          //   // Nettoie les écouteurs d'événements lors du démontage du composant
          //   return () => {
          //     resizableHandles.forEach((handle) => {
          //       handle.removeEventListener('mouseenter', disableAnimation);
          //       handle.removeEventListener('mouseleave', disableAnimation);
          //     });
          //   };
          // }, []);

          //const disableAnimation = () => { setAnimation(false) };