import { useContext, useEffect } from 'react'
import * as WindowsIcon from "react-icons/fc"
import * as UnIcon from "react-icons/md"
import { WindowContext } from '../WindowContext';


export default function TaskbarIcon({icon, name, children, className}) {

  const IconComponent =  icon == "MdWindow" ? UnIcon[icon] : WindowsIcon[icon];

  const {allTask, setAllTask, setLauncher} = useContext(WindowContext);
  const DefaultTask = { [icon] : {state : "w-close", name : name, content : children} }

  // On Load
  useEffect(() =>{
    setAllTask(prev => ({
      ...prev,
      ...DefaultTask
    }));
  }, [])
  

  // On Click Icon, Update State
  const handleTaskClick = () =>{

    // Open Launcher
    if(icon == "MdWindow"){
      setLauncher(prev => !prev)
    }


    else{
      const State = allTask[icon].state;   
      setAllTask(prev => ({
        ...prev,
        [icon]: {
          ...prev[icon],
          state: State == "" || State == "w-expand" ? "w-small" : "",
        }
      }));   
    }
    
  }


  return (
    <div className={`TaskbarIcon ${className}`} onClick={handleTaskClick}>
        {IconComponent && <IconComponent />}
        {name != "Launcher" && allTask[icon] && <div className={allTask[icon]?.state === "w-close"
          ? "TaskbarIconClose"
          : allTask[icon]?.state === "w-small"
          ? "TaskbarIconMinimise"
          : "TaskbarIconFocus"}></div>}
    </div>
  )
}
