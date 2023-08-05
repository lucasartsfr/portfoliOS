import React, { useContext } from 'react'
import {MdDarkMode as Dark} from "react-icons/md"
import {MdLightMode as Light} from "react-icons/md"
import {MdOpenInFull as Full} from "react-icons/md"
import {MdOutlineCloseFullscreen as CloseFull} from "react-icons/md"
import { WindowContext } from '../WindowContext'

export default function SystemIcon({name, action}) {
    
    const {setMode, mode} = useContext(WindowContext);

    const Icon = {
        Theme : {
            "true" : Light,
            "false" : Dark
        },
        Full : Full
    }
    const SelectedIcon =Icon[name][mode] || Icon[name]

    const Action = (action) =>{
        if(action == "FullScreen"){
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                document.documentElement.requestFullscreen();
            }
        }

        if(action == "SwitchMode"){
            setMode(prev => !prev)
        }
    }

  return (
    <div className='system-icon-container' onClick={() => Action(action)}>
        <SelectedIcon className="system-icon" />
    </div>
  )
}
