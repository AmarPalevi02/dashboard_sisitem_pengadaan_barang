import { useEffect } from 'react'
import { listen } from './redux/listener'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from '../src/app/index'


const App = () => {
  useEffect(() => {
    listen()
  }, [])

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

  )
}

export default App
