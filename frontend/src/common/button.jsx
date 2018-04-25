import React from 'react';
import '../CSS/button.css'

const CustomButton = (props) => {
  return (
    <button className="custom-button" onClick={props.func}>
      {props.text}
    </button>
  )
}

export default CustomButton;