import { useContext } from 'react'
import './App.css'
import Screen from './component/Screen'
import Taskbar from './component/Taskbar'
import Window from './component/Window'
import { WindowContext } from './WindowContext'
import { QueryClient, QueryClientProvider } from 'react-query';
import DesktopIcon from './component/DesktopIcon'
import Loading from './component/Loading'

const queryClient = new QueryClient();

function App() {

  const {allTask, mode} = useContext(WindowContext);

  if(!allTask){
    return <Loading />
  }

  const DisplayWindow = allTask && Object.keys(allTask).map((task, index) => {
    // task !== "MdWindow" || && allTask[task].state !== "w-close"
    if ( allTask[task].state !== "w-close") {
      return (
        <Window key={task} icon={task} title={task} index={index}>
          {allTask[task].content}
        </Window>)
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Screen DarkMode={mode}>
          {DisplayWindow}     


          <DesktopIcon name="LinkedIn" url="https://www.linkedin.com/in/lucasarts/"/> 
          <DesktopIcon name="Steam" url="https://steamcommunity.com/id/Fliip36"/> 
          <DesktopIcon name="Instagram" url="https://www.instagram.com/lucasartsfr/"/> 
          <DesktopIcon name="Dribbble" url="https://dribbble.com/LucasArtsFr"/> 
          <DesktopIcon name="GitHub" url="https://github.com/lucasartsfr"/> 


          <Taskbar />

      </Screen>
     </QueryClientProvider>
  )
}

export default App
