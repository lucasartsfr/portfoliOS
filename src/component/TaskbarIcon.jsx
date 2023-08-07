import { useContext, useEffect} from 'react'
import * as WindowsIcon from "react-icons/fc"
import * as UnIcon from "react-icons/md"
import { WindowContext } from '../WindowContext';


export default function TaskbarIcon({icon, name, children, className, customIcon, size}) {

  //const IconComponent = (icon == "MdWindow") ? UnIcon[icon] : WindowsIcon[icon];

  let IconComponent;
  if(icon.startsWith('Md')){
    IconComponent = UnIcon[icon]
  }
  else if(icon.startsWith('Fc')){
    IconComponent = WindowsIcon[icon]
  }
  else{
    IconComponent = () => { return <img src={icon} className='TaskbarCustomIcon' style={{maxHeight : size ? size : "100%"}}/>}
  }

  const {allTask, setAllTask, setLauncher, delayAnimation, getViewportWidth} = useContext(WindowContext);
  const DefaultTask = { 
    [icon] : {
      state : "w-close", 
      name : name, 
      content : children, 
      timeOpen : 0,
      position : {
        current : {x : getViewportWidth() / 4, y : 100},
        history : {x : getViewportWidth() / 4, y : 100}
      }
    } 
  };

  // On Load -> Create TaskList
  useEffect(() =>{
    setAllTask(prev => ({
      ...prev,
      ...DefaultTask
    }));
  }, [])
  

  // On Click Icon, Update State
  const handleTaskClick = () =>{
    
    console.log(DefaultTask)
    // Open Launcher
    if(icon == "MdWindow"){ setLauncher(prev => !prev)}

    // Open Window
    else{
      const State = allTask[icon]?.state;   
      delayAnimation(400)
      setAllTask(prev => ({
        ...prev,
        [icon]: {
          ...prev[icon],
          state: State == "w-open" || State == "w-expand" ? "w-small" : "w-open",
          timeOpen : prev[icon].timeOpen + 1,
          position : DefaultTask[icon].position
        }
      }));   
    }
    
  }


  return (
    <div className={`TaskbarIcon ${className}`} onClick={handleTaskClick}>
        {customIcon ? <img src={customIcon} className='TaskbarCustomIcon' style={{maxHeight : size ? size : "100%"}}/> : <IconComponent />}
        {name != "Launcher" && allTask[icon] && <div className={allTask[icon]?.state === "w-close"
          ? "TaskbarIconClose"
          : allTask[icon]?.state === "w-small"
          ? "TaskbarIconMinimise"
          : "TaskbarIconFocus"}></div>}
    </div>
  )
}
