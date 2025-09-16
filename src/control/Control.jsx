import React from 'react'
import "./Visualizer.css"
const Control = ({ handleNewArrayGenerate, handleSorting, user, setuser }) => {
  return (
    <div className='controls-container'>
      <div className='input-wrapper'>
        <input type='text' value={user} onChange ={(e) => setuser()} className='neumorphic-input ' placeholder='Enter Your Array Between 1-300' />
        <div className='info-icon-wrapper'>
          <i className='info-icon'>i</i>
          <span className='tooltip-text'>Provide your Array by commas separated integer</span>
        </div>
      </div>
      <button className='new-button' onClick={handleNewArrayGenerate}>Generated New  Array</button>
      <select className='neumorphism-dropdown ' onChange={handleSorting}>
        <option value=''>Select Sorting</option>
        <option value='bubblesort'>Bubble Sorting</option>
      </select>
    </div>
  )
}

export default Control