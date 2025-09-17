import { useEffect, useState } from 'react'
import './App.css'
import Visualizer from './control/Visualizer';
import Control from './control/Control';
import bubblesort from './control/algorithm/BubbleSort';
function App() {

  const [array, setarray] = useState([]);
  const [user,setuser]  = useState('');

useEffect(() => {
  if(user){
    const userInput = user.split(","); // split by commas
    
    const filtered = userInput
      .map(item => parseFloat(item)) // convert to number (float first)
      .filter(num => !isNaN(num) && Number.isInteger(num) && num <= 500); // keep only valid integers ≤ 500

    console.log(filtered, "this is user input");
    setarray(filtered);
  }
}, [user]);

  const handleNewArrayGenerate = () => {
    const newArray = Array.from({ length: 6 }, () =>
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
        if (swap) {
          const heightTemp = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = heightTemp;
          const content = barOne.innerText;
          barOne.innerText = barTwo.innerText;
          barTwo.innerText = content;
        }
        setTimeout(() => {
          barOne.style.backgroundColor = 'blue';
          barTwo.style.backgroundColor = 'blue';
        }, 150)
      }, i * 150)
      barOne.style.backgroundColor = swap ? 'red' : 'yellow'
      barTwo.style.backgroundColor = swap ? 'red' : 'yellow'
    }
    setTimeout(()=>{
     for (let j = 0; j < barEle.length; j++) {
      setTimeout(()=>{
        barEle[j].style.backgroundColor = 'green'
      },j* 150)
      
     }
    },animation.length * 150)
  }


  return (
    <>
      <Control handleNewArrayGenerate={handleNewArrayGenerate}
        handleSorting={handleSorting} user = {user} setuser={setuser}/>




      <Visualizer array={array} />
    </>

  )
}

export default App
