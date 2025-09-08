import { useState } from 'react'
import './App.css'
import Visualizer from './control/Visualizer';

function App() {

const [array,setarray] = useState([100,270,465,58,160,178,490]);
  return (
    <>
    <Visualizer array={array}/>
    </>
 
  )
}

export default App
