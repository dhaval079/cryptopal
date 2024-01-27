import React from 'react'

function Img(props) {
  return (
    <div>
      <img src={props.text} alt={props.text}/>
    </div>
  )
}

export default Img
