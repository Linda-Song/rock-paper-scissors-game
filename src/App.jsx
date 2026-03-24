import './App.css'
import Box from './component/Box'
import paper from './assets/paper.png'
import scissors from './assets/scissors.png'
import rock from './assets/rock.png'

import { useState } from 'react'
import ScoreBox from './component/ScoreBox'

const choice =  {
    scissors: {
      title: "Scissors",
      img: scissors,
    },
    paper: {
      title: "Paper",
      img: paper,
    },
    rock:{
      title: "Rock",
      img: rock
    },
  }

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  
  const play = (select) => {
    //각각 선택한 것 담기
    const userObj = choice[select]
    const comObj = randomChoice();
    setUserSelect(userObj);
    setComSelect(comObj);
    
    //게임결과에 따라 win,lose,tie 반영하기
    const gameResult = judgement(userObj,comObj)  
    setResult(gameResult);

    // 결과에 따라 점수도 같이 반영하기
    if(gameResult === "Win"){
      setUserScore(prev => prev +1);
    } else if (gameResult === "Lose") {
      setComScore(prev => prev+1);
    }
  };
  
  const randomChoice= () => {
    const itemArr = Object.keys(choice);
    const randomSelect = Math.floor(Math.random() * itemArr.length);
    const final = itemArr[randomSelect];
    return choice[final];
  }

  const judgement = (user,com)=> {
    if(user.title === com.title) return "Tie";
    if(
        (user.title === "Rock" && com.title === "Scissors") || 
        (user.title === "Scissors" && com.title === "Paper") ||
        (user.title === "Paper" && com.title === "Rock") 
      ) {
          return "Win";
      } return "Lose"
    };

    const handleReset = () => {
      setUserSelect(null);
      setComSelect(null);
      setResult("");
      setUserScore(0);
      setComScore(0);
    };

  
  return (
    <>
    <div className='container'>
      <h2>Let's play!</h2>

      <div className='gameBox'>
          <div className='scoreBoard'>
              <div className='resetScore'>
                <button type='button' onClick={handleReset}>
                  Restart!</button>
              </div>
            <ScoreBox title="Com" result={result} score={comScore}  />
            <ScoreBox title="You" result={result} score={userScore} />
          </div>
        
          <div className='box-container' >
            <Box title="Com" item={comSelect} result={result}/>
            <Box title="You" item={userSelect} result={result} />
           
          </div>

        </div>
     
      <div className='playBox'>
        <button onClick={() =>play("scissors") } className='gameBtn' >
          <img src={scissors} alt="scissors" className='gameBtn_img'  />
          <p>가위</p>
        </button>
        <button onClick={() =>play("rock") } className='gameBtn' >
          <img src={rock} alt="rock" className='gameBtn_img' />
          <p>바위</p>
        </button>
        <button onClick={() => play("paper") } className='gameBtn' >
          <img src={paper} alt="paper"  className='gameBtn_img'/>
          <p>보</p>
        </button>
      </div>
       </div>
      
      
   
      
    </>
  )
}

export default App
