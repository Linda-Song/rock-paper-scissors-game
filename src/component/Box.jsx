import React from 'react'

const Box = (props) => {
  console.log("props",props)
  return (
      <div className='box'>
        <h2> {props.title} </h2>
        <div className='item'>
          {props.item && <img src={props.item.img} className='item-img' />}
        </div>
        <h2>WIN!</h2>     
    </div>
  );
};

export default Box
