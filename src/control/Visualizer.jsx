import React from 'react'
import "./Visualizer.css"
const Visualizer = ({array}) => {
    console.log(array);
  return (
    <div className="array-container">
      {array.map((item,index)=>(
        <div className='bar' style={{height:`${item}px`}}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default Visualizer