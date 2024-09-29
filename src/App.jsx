import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
  <div className="container">
  <Textform heading="Enter The Text To Analysis"/>
  </div>
    </>
  )
}

export default App
