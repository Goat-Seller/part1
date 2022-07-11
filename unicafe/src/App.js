import { useState } from "react";

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statiscics = ({stats}) => {
  if(stats[3] === 0) {
    return(
      <p>No feedback given</p>
    )
}
  return(
    <table>
      <thead><tr><th>Statistics</th></tr></thead>
      <tbody>
        <StatisticLine text ="good" value ={stats[0]}/>
        <StatisticLine text ="neutral" value ={stats[1]}/>
        <StatisticLine text ="bad" value ={stats[2]}/>
        <StatisticLine text ="all" value ={stats[3]}/>
        <StatisticLine text ="average" value ={stats[4]}/>
        <StatisticLine text ="positive" value ={stats[5]}/>
      </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] =useState(0)
  const [neutral, setNeutral] =useState(0)
  const [bad, setBad] =useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)

  const average = () => score/all
  const positive = () => (good/all)*100

  const stats = [good, neutral, bad, all, average(),positive() ]
  const handleClickGood = () => {
    setGood(good +1)
    setScore(score + 1)
    setAll(all + 1)
  }
  const handleClickNeutral = () =>{
    setNeutral(neutral +1)
    setAll(all+ 1)
  }
  const handleClickBad = () => {
    setBad(bad +1)
    setScore(score - 1)
    setAll(all+ 1)
  }

  return(
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text="Good" />
      <Button handleClick={handleClickNeutral} text="Neutral"/>
      <Button handleClick={handleClickBad} text="Bad"/>
      <Statiscics stats={stats}/>
    </div>
  )
}

export default App;
