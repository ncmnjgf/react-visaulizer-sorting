import { useState } from 'react'
import './App.css'
import Visualizer from './control/Visualizer';
import Control from './control/Control';
import bubblesort from './control/algorithm/BubbleSort';
function App() {

  const [array, setarray] = useState([]);

  const handleNewArrayGenerate = () => {
    const newArray = Array.from({ length: 30 }, () =>
      Math.floor(Math.random() * 500)
    );
    setarray(newArray)
  }

  const handleSorting = (e) => {

    const sortingMethod = e.target.value;
    switch (sortingMethod) {
      case 'bubblesort':
        const animationArr = bubblesort(array);
        bubbleAnimation(animationArr)
        break;
      default:
        break;
    }
  }
  function bubbleAnimation(animation) {
    const barEle = document.getElementsByClassName('bar');
    for (let i = 0; i < animation.length; i++) {
      let [barOneInd, bartwoInd, swap] = animation[i];
      let barOne = barEle[barOneInd];
      let barTwo = barEle[bartwoInd];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? 'red' : 'yellow'
        barTwo.style.backgroundColor = swap ? 'red' : 'yellow'
        if(swap){
          const heightTemp = barOne.style.height;
          barOne.style.height  = barTwo.style.height;
          barTwo.style.height = heightTemp;



          const content = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = content;
        }
      }, 1000)
      barOne.style.backgroundColor = swap ? 'red' : 'yellow'
      barTwo.style.backgroundColor = swap ? 'red' : 'yellow'
    }
  }
  return (
    <>
      <Control handleNewArrayGenerate={handleNewArrayGenerate}
        handleSorting={handleSorting} />
      <Visualizer array={array} />
    </>

  )
}

export default App
