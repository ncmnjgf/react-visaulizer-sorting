import { useEffect, useState } from 'react'
import './App.css'
import Visualizer from './control/Visualizer';
import Control from './control/Control';
import { MergeSort } from './control/algorithm/mergeSort';
import bubblesort from './control/algorithm/BubbleSort';
function App() {

  const [array, setarray] = useState([]);
  const [user, setuser] = useState('');
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState('');
  useEffect(() => {
    if (user) {
      const userInput = user.split(","); // split by commas
      const filtered = userInput
        .map(item => parseFloat(item)) // convert to number (float first)
        .filter(num => !isNaN(num) && Number.isInteger(num) && num <= 500); // keep only valid integers ≤ 500

      console.log(filtered, "this is user input");
      setarray(filtered);
    }
  }, [user]);

  const handleNewArrayGenerate = () => {
    const newArray = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 500)
    );
    setarray(newArray)
  }
    const reSet = () => {
    setarray([])
    setSelectedSorting('')
  };

  const handleSorting = (e) => {
    const sortingMethod = e.target.value;
    setSelectedSorting(sortingMethod)
    setIsSorting(true);
    let animationArr = [];
    switch (sortingMethod) {
      case 'bubblesort':
        animationArr = bubblesort(array);
        bubbleAnimation(animationArr)
        break;
      case "mergeSort":
        animationArr = MergeSort(array);
        animateMergeSorting(animationArr);
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
    setTimeout(() => {
      for (let j = 0; j < barEle.length; j++) {
        setTimeout(() => {
          barEle[j].style.backgroundColor = 'green'
        }, j * 150)

      }
    }, animation.length * 150)
  };

  const animateMergeSorting = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOne = bars[barOneIdx];
        const barTwo = bars[barTwoIdx];
        const color = i % 3 === 0 ? "yellow" : "blue";
        setTimeout(() => {
          barOne.style.backgroundColor = color;
          barTwo.style.backgroundColor = color;
        }, i * speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOne = bars[barOneIdx];
          barOne.style.height = `${newHeight}px`;
          barOne.innerHTML = newHeight;
        }, i * speed);
      }
    }
  };


  return (
    <>
      <Control handleNewArrayGenerate={handleNewArrayGenerate}
        handleSorting={handleSorting} user={user} setuser={setuser}
        setSpeed={setSpeed}
        reSet={reSet}
        isSorting={isSorting}
        speed={speed}
        selectedSorting={selectedSorting}



      />
      <Visualizer array={array} />
    </>

  )
}

export default App
