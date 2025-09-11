import { useState } from 'react'
import './App.css'
import Visualizer from './control/Visualizer';
import Control from './control/Control';
import bubblesort from './control/algorithm/BubbleSort';
function App() {

const [array,setarray] = useState([]);

const handleNewArrayGenerate = () =>{
  const newArray = Array.from({length : 30},()=>
    Math.floor(Math.random () * 500)
  );
  setarray(newArray)
}

const handleSorting = (e) =>{

const sortingMethod = e.target.value;
switch(sortingMethod){
  case'bubblesort':
  const animationArr = bubblesort(array);
  BubbleAnimation('animation')
  break;
  default:
    break;
}
}
function BubbleAnimation(animation){
console.log(animation)

}
  return (
    <>
    <Control handleNewArrayGenerate={handleNewArrayGenerate}
    handleSorting={handleSorting}/>
    <Visualizer array={array}/>
    </>
 
  )
}

export default App
