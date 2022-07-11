import { useState } from 'react'

const Anecdote= (props) => {
  return(
    <div>
      <h1>{props.text}</h1>
      <p>{props.anec}</p>
      {props.votes}
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))

  const random =() => setSelected(Math.floor(Math.random() * 7))
  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const max= Math.max(...votes)
  const index = votes.indexOf(max)
  const top = () => (anecdotes[index])
  const getVote = () => votes[selected]
  const getTopVote = () => votes[index]

  return (
    <div>
      <Anecdote anec={anecdotes[selected]} text="Random anecdote" votes ={getVote()}/>
      <button onClick={random}>next anecdote</button>
      <button onClick={vote}>vote</button><br/>
      <Anecdote anec={top()} text="Top anecdote" votes={getTopVote()}></Anecdote>
    </div>
  )
}

export default App