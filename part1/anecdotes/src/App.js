import React, {useState} from "react";

const Button = ({handleClick,text}) => (
    <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]


  const zeroState = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)

  const [points,setPoints] = useState(zeroState)

  const [selected,setSelected] = useState(0)

  const randomIndex = (min,max) => {
    return Math.floor(Math.random() * (max-min)) + min
  }

  const getIndexofMaxValue = (array) => {

    let maxValue = -1
    let maxIndex = -1

    for (let i = 0; i < array.length; i++) {
      if (array[i] > maxValue){
        maxValue = array[i]
        maxIndex = i
      }
    }
    return maxIndex
  }

  const setSelectedTo = (index) => {
    setSelected(index)
  }
  const voteForAnecdote = (anecdoteIndex) => {
    const copyOfPoints = [...points]
    copyOfPoints[anecdoteIndex] -= -1
    setPoints(copyOfPoints)
  }

  return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p><br/>
        <Button handleClick={() => setSelectedTo(randomIndex(0,anecdotes.length))} text='Next anecdote'/>
        <Button handleClick={() => voteForAnecdote(selected)} text='Vote'/>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[getIndexofMaxValue(points)]}</p>
        <p>{points}</p>
      </div>
  )

}

export default App;
