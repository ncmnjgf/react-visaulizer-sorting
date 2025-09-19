import React from 'react'
import "./Visualizer.css"
const Control = ({ handleNewArrayGenerate, handleSorting, user,isSorting, setuser ,reSet, selectedSorting}) => {
  return (
    <div className='controls-container'>
      <div className='input-wrapper'>
        <input type='text' value={user} onChange ={(e) => setuser(e.target.value)} className='neumorphic-input ' placeholder='Enter Your Array Between 1-300' />
        <div className='info-icon-wrapper'>
          <i className='info-icon'>i</i>
          <span className='tooltip-text'>Provide your Array by commas separated integer</span>
        </div>
      </div>
      <button className='new-button' onClick={handleNewArrayGenerate}>Generated New  Array</button>
      <select className='neumorphism-dropdown ' onChange={handleSorting}>
        <option value=''>Select Sorting</option>
        <option value='bubblesort'>Bubble Sorting</option>
        <option value='mergesort'>Merge Sorting</option>
        <option value='selectionsort'>Selection Sorting</option>
      </select>
      <label>
        Speed :
        <input
        type='range'
        min="10"
        max="200"
        className='speedControl'
        onChange={(e) => setSpeed(200 -e.target.value)}
        disabled={isSorting}
        
        />

      </label>
    </div>
  )
}

export default Control