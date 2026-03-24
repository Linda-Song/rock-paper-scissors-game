import React from 'react'
import WinImg from '../assets/win.png'
import LoseImg from '../assets/lose.png'
import PeaceImg from '../assets/peace.png'
import ComImg from '../assets/com.png'

const Scorebox = (props) => {
  
  let resultImg

  if(props.title === "You") {
    if(props.result === "Win") resultImg = WinImg;
    else if(props.result === "Lose") resultImg = LoseImg;
    else resultImg = PeaceImg;
  } else {
    resultImg = ComImg;
  }
  
  return (
    <>
      <div className='score-box'>
        <img src={resultImg} className='score-box_img' /> 
        <p>{props.title} : {props.score} </p>
        
      </div>
    </>
  )
}

export default Scorebox
