import { createContext, useState } from 'react';


const WindowContext = createContext();

const WindowContextProvider = ({ children }) => {
  const [allTask, setAllTask] = useState({});
  const [animation, setAnimation] = useState(false);
  const [focus, setFocus] = useState("")
  const [launcher, setLauncher] = useState(false);
  const [mode, setMode] = useState(true);

  const getViewportWidth = () => { return window.innerWidth;};

  const delayAnimation = (delay) => {
    setAnimation(true);
    // Replace 3000 with the duration in milliseconds (e.g., 5000 for 5 seconds)
    setTimeout(() => setAnimation(false), delay);
  };
  
  return (
    // Passez les valeurs via le contexte avec AppContext.Provider
    <WindowContext.Provider value={{allTask, setAllTask, animation, setAnimation, setFocus, focus, setLauncher, launcher, getViewportWidth, mode, setMode, delayAnimation}}>
      {children}
    </WindowContext.Provider>
  );
};

export { WindowContext, WindowContextProvider };