import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WindowContextProvider } from './WindowContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <WindowContextProvider>
    <App/>
  </WindowContextProvider>
  // </React.StrictMode>,
)
