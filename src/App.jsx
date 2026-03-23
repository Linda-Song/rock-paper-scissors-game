import './App.css';
import Box from './component/Box.jsx';
import rock from './assets/rock.png';
import scissor from './assets/scissor.png';
import paper from './assets/paper.png';
import { useState } from 'react';

const choice = {
    rock:{
      name:"Rock",
      img: rock,
    },
    scissor:{
      name:"Scissor",
      img: scissor,
    },
    paper:{
      name:"Paper",
      img: paper,
    }
  }

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (game) => {
    setUserSelect(choice[game])
  };


   return (
    <>
     <div className='container'>
      <h1>Let's play </h1>
      <div className='box-wrapper'>
        <Box title="YOU" item = {userSelect} />
        
      </div>
      <div className='item-btn'>
        <button onClick={() => play("scissor")}>
          <img src={scissor} className='item-btn_img'alt="scissor"/>
          <p>가위</p>
        </button>
        <button onClick={() => play("rock")}>
          <img src={rock} className='item-btn_img'alt="rock"/>
          <p>바위</p>
          </button>
        <button onClick={() => play("paper")}>
          <img src={paper} className='item-btn_img'alt="paper"/>
          <p>보</p>
          </button>
      </div>
    
    
    </div>
     
    </>
  );
}

export default App;