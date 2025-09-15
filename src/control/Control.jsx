import React from 'react'
import "./Visualizer.css"
const Control = ({ handleNewArrayGenerate,handleSorting,user,setuser }) => {
  return (
    <div className='controls-container'>
      <button className='new-button' onClick={handleNewArrayGenerate}>Generated New  Array</button>
      <select className='neumorphism-dropdown ' onChange={handleSorting}>
        <option value=''>Select Sorting</option>
        <option value='bubblesort'>Bubble Sorting</option>
      </select>
    </div>
  )
}

export default Control