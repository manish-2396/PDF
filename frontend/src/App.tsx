import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pdf from './Componet/Pdf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pdf/>
    </>
  )
}

export default App
