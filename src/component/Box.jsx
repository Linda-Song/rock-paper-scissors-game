import React from 'react'



const Box = (props) => {
  let result;
  if(props.title === "Com" &&
     props.result !== "Tie" &&
     props.result !== ""
  ) {
    result = props.result === "Win" ? "Lose" : "Win";
  } else {
    result = props.result
  }
  const boxClass = props.result ? `box-${result}` : '';
  return (
    <>
      <div className={`box ${boxClass}`}>
       
        <div className='box_img_wrap'>
        {props.item && <img src={props.item.img} className='box_img'/>}
        </div>
        <p>{result}</p>
      </div> 
    </>
  )
}

export default Box
