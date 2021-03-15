import React from 'react';

const Button = ({ btnText, handelClick }) => {
  return(
    <button className="btn" onClick={handelClick}>
      {btnText}
    </button>
  )
}

export default Button;