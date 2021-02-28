import React from 'react'
import * as bsIcon from 'react-icons/bs'

const Rating = ({ rating, text, color }) => {
  return (
    <div className="rating align-middle">
      {Array(rating).fill().map((_) => 
        <span>
          <bsIcon.BsStarFill></bsIcon.BsStarFill>
        </span>
      )}
      <small className="ml-2">
        <strong>{ text }</strong>
      </small>
    </div>
  )
}

export default Rating
