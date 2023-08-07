import { useContext } from 'react'
import * as WindowsIcon from "react-icons/fc"
import * as UnIcon from "react-icons/md";
import { WindowContext } from '../WindowContext'
import{ GoDotFill as ButtonFill} from "react-icons/go"
 
export default function Navbar({selector, title, icon, setAnimate}) {

  let IconComponent;
  if(icon.startsWith('Md')){
    IconComponent = UnIcon[icon]
  }
  else if(icon.startsWith('Fc')){
    IconComponent = WindowsIcon[icon]
  }
  else{
    IconComponent = ({size, className}) => { return <img src={icon} className={`${className} NavbarCustomIcon`}  style={{maxHeight : size ? size : "100%"}}/>}
  }
  const {allTask, setAllTask, setAnimation, delayAnimation} = useContext(WindowContext);

  const NavBarAction = (value) =>{
    // Small
    if(value == "w-small"){    
      delayAnimation(400)
      setAllTask(prev => ({
        ...prev,
        [icon]: {
          ...prev[icon],
          state: "w-small",
        }
      }));          
    }

    // Expand
    if(value == "w-expand"){

      // Already Full
      if(allTask[icon]?.state == "w-expand"){        
        //setPosition(history)
        setAllTask(prev => ({
          ...prev,
          [icon]: {
            ...prev[icon],
            state: "w-open",
            position : {
              current : prev[icon].position.history,
              history : prev[icon].position.history
            }
          }
        })); 
        delayAnimation(400)
      }

      // Not full
      else{
        //setPosition({x:0,y:0})
        setAllTask(prev => ({
          ...prev,
          [icon]: {
            ...prev[icon],
            state: "w-expand",
            position : {
              current : {x:0,y:0},
              history : prev[icon].position.history
            }
          }
        }));         
      }
      
    }

    // Close
    if(value == "w-close"){    
      const Wd = document.getElementById(selector);
      Wd.classList.add('w-close-bis')
      setTimeout(() =>{
        setAllTask(prev => ({
          ...prev,
          [icon]: {
            ...prev[icon],
            state: "w-close",
            timeOpen : 0,
          }
        })); 
        setAnimation(false)
      }, 400)
    }
  }

  return (
    <div className='NavBar'>
        <div className='Left'>
            <IconComponent className="Icon" size={24}/>
            <h2 className='Title'>{title}</h2>
        </div>
        <div className='Right'>
            <ButtonFill color='#FFbd44' className='ActionNav small' size={24} onClick={() => NavBarAction("w-small")}/>
            <ButtonFill color='#00ca4e' className='ActionNav expand' size={24} onClick={() =>  NavBarAction("w-expand")}/>
            <ButtonFill color='#ff605c' className='ActionNav close' size={24} onClick={() =>  NavBarAction("w-close")}/>
        </div>
    </div>
  )
}
