import React from 'react'

import './totalCosting.css'

function TotalCosting (props) {
  return (
    
    <div className='totalCosting'>

      <div className='SerName'>{props.serName}</div>
      <div className='SerPrice'>${props.serPrice}/-</div>
    
    </div>
  )
}

export default TotalCosting
