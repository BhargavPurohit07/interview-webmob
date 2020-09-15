import React from 'react'
import '../AddinationalServices/add.css'

function PurchasedSer (props) {
  return (
    <div>
      <div className='mainText'> {props.mainText}</div>
      <div className='addMain'>
        <div className='imgcon'>
          <img src={props.img} alt={props.img} />
        </div>
        <div>
          <div className='addhead'>
            <h2>{props.serName}</h2>

            <h3>Price:- {props.price}</h3>
          </div>

          <div className='addDesc'>{props.decs}</div>
        </div>
      </div>
    </div>
  )
}

export default PurchasedSer
