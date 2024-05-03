import React from 'react'
import './css/Travel.css'

function Travel({travel}) {
    const{id,title,description,image} = travel;
  return (
    <div className='travel'>
        <div>
            <img src={image}/>
            <h4 className='travelTitle'>{title}</h4>
            <h5 className='travelDescription'>{description}</h5>
        </div>
    </div>
  )
}

export default Travel
