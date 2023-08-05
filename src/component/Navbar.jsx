import { useContext } from 'react'
import { BiSquareRounded as Square} from "react-icons/bi"
import {AiOutlineClose as Close} from "react-icons/ai"
import {AiOutlineLine as Line} from "react-icons/ai"
import * as WindowsIcon from "react-icons/fc"
import * as UnIcon from "react-icons/md";
import { WindowContext } from '../WindowContext'
import{ FaDotCircle as Button} from "react-icons/fa"
import{ GoDotFill as ButtonFill} from "react-icons/go"
 
export default function Navbar({title, icon, setStatus, setPosition, status, history, setAnimate}) {

  const Icon = (icon == "MdWindow") ? UnIcon[icon] : WindowsIcon[icon];
  const {allTask, setAllTask, setAnimation} = useContext(WindowContext);

  const NavBarAction = (value) =>{
    // Small
    if(value == "w-small"){
      setStatus("w-small")
      setAnimation(true)
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
      if(allTask[icon].state == "w-expand"){
        setAllTask(prev => ({
          ...prev,
          [icon]: {
            ...prev[icon],
            state: "",
          }
        })); 
        setPosition(history)
        setAnimation(true)
      }

      // Not full
      else{
        setAllTask(prev => ({
          ...prev,
          [icon]: {
            ...prev[icon],
            state: "w-expand",
          }
        })); 
        setPosition({x:0,y:0})
      }
      
    }
    // Close
    if(value == "w-close"){
      setAnimation(true)
      setAllTask(prev => ({
        ...prev,
        [icon]: {
          ...prev[icon],
          state: "w-close",
        }
      })); 
    }
  }

  return (
    <div className='NavBar'>
        <div className='Left'>
            <Icon className="Icon" size={18}/>
            <h2 className='Title'>{title}</h2>
        </div>
        <div className='Right'>
            {/* <Line className='ActionNav small' size={14} onClick={() => NavBarAction("w-small")}/>
            <Square  className='ActionNav expand' size={14} onClick={() =>  NavBarAction("w-expand")}/>
            <Close  className='ActionNav close' size={14} onClick={() =>  NavBarAction("w-close")}/> */}
            <ButtonFill color='#FFbd44' className='ActionNav small' size={24} onClick={() => NavBarAction("w-small")}/>
            <ButtonFill color='#00ca4e' className='ActionNav expand' size={24} onClick={() =>  NavBarAction("w-expand")}/>
            <ButtonFill color='#ff605c' className='ActionNav close' size={24} onClick={() =>  NavBarAction("w-close")}/>
        </div>
    </div>
  )
}
