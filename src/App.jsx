import { useEffect, useState } from 'react';
import './App.css';
import Visualizer from './control/Visualizer';
import Control from './control/Control';
import { MergeSort } from './control/algorithm/mergeSort';
import bubblesort from './control/algorithm/BubbleSort';
import { selectionSort } from './control/algorithm/SelectionSort';
function App() {
  const [array, setarray] = useState([]);
  const [user, setuser] = useState('');
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState('');

  // handle user input numbers
  useEffect(() => {
    if (user) {
      const userInput = user.split(",");
      const filtered = userInput
        .map(item => parseFloat(item.trim()))
        .filter(num => !isNaN(num) && Number.isInteger(num) && num <= 500);

      console.log(filtered, "this is user input");
      setarray(filtered);
    }
  }, [user]);

  // generate random array
  const handleNewArrayGenerate = () => {
    const newArray = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 500)
    );
    setarray(newArray);
  };

  // reset everything
  const reSet = () => {
    setarray([])
    setSelectedSorting('')
  };

  // trigger sorting
  const handleSorting = (e) => {
    const sortingMethod = e.target.value;
    setSelectedSorting(sortingMethod);
    setIsSorting(true);
    let animationArr = [];
    switch (sortingMethod) {
      case 'bubbleSort':
        animationArr = bubblesort(array);
        bubbleAnimation(animationArr);
        break;
      case "mergeSort":
        animationArr = MergeSort(array);
        animateMergeSorting(animationArr);
        break;
      case "selectionSort":
        animationArr = selectionSort(array);
        animateSelectionSorting(animationArr);
        break;
      default:
        break;
    }
  };

  // bubble sort animation
  function bubbleAnimation(animation) {
    const barEle = document.getElementsByClassName('bar');
    for (let i = 0; i < animation.length; i++) {
      let [barOneInd, bartwoInd, swap] = animation[i];
      let barOne = barEle[barOneInd];
      let barTwo = barEle[bartwoInd];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? 'red' : 'yellow';
        barTwo.style.backgroundColor = swap ? 'red' : 'yellow';
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
        }, speed);
      }, i * speed);
    }
    setTimeout(() => {
      for (let j = 0; j < barEle.length; j++) {
        setTimeout(() => {
          barEle[j].style.backgroundColor = 'green';
        }, j * speed);
      }
    }, animation.length * speed);
  }

  // merge sort animation
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

    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };
   const animateSelectionSorting = (animations) => {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animations[i];
      const barOne = bars[barOneIdx];
      const barTwo = bars[barTwoIdx];
      setTimeout(() => {
        barOne.style.backgroundColor = swap ? "red" : "yellow";
        barTwo.style.backgroundColor = swap ? "red" : "yellow";
        if (swap) {
          const tempHeight = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = tempHeight;
          const tempContent = barOne.innerHTML;
          barOne.innerHTML = barTwo.innerHTML;
          barTwo.innerHTML = tempContent;
        }
        setTimeout(() => {
          barOne.style.backgroundColor = "blue";
          barTwo.style.backgroundColor = "blue";
        }, speed);
      }, i * speed);
    }
    setTimeout(() => {
      for (let j = 0; j < bars.length; j++) {
        setTimeout(() => {
          bars[j].style.backgroundColor = "green";
        }, j * speed);
      }
      setIsSorting(false);
    }, animations.length * speed);
  };

  return (
    <div className='App'>
      <h1>Sorting Visualizer - Bandgar</h1>
      <Control
        handleNewArrayGenerate={handleNewArrayGenerate}
        handleSorting={handleSorting}
        user={user}
        setuser={setuser}
        setSpeed={setSpeed}
        reSet={reSet}
        isSorting={isSorting}
        speed={speed}
        selectedSorting={selectedSorting}
      />
      <Visualizer array={array} />
    </div>
  );
}

export default App;
