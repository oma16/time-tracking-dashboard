import React from 'react'
import './card.css'

const Card = ({ className, children, handleClick}) => {
  return (
    <div className={className} onClick={handleClick}>
         {children}
    </div>
  )
}

export default Card