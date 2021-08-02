import React, {useState} from "react";

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}:{value}</td>
        </tr>
    );
}

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad
    const average = (good * 1 + neutral * 0 + bad * -1) / total
    const positive = good * 100 / total
    if (bad !== 0 || neutral !== 0 || good !== 0) {
        return (
            <tabel>
                <tbody>
                <StatisticLine text="Good" value={good}/>
                <StatisticLine text="Neutral" value={neutral}/>
                <StatisticLine text="Bad" value={bad}/>
                <StatisticLine text="Total" value={total}/>
                <StatisticLine text="Average" value={average}/>
                <StatisticLine text="Positive" value={positive}/>
                </tbody>
            </tabel>
        )


    } else {
        return <p>No feedback given</p>
    }

}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incrementFeedback = (feedback) => {
        if (feedback === 'good') {
            setGood(good + 1)
        } else if (feedback === 'neutral') {
            setNeutral(neutral + 1)
        } else {
            setBad(bad + 1)
        }

    }

    return (
        <div>
            <h1>Give feedback</h1><br/>
            <Button handleClick={() => incrementFeedback('good')} text='Good'/>
            <Button handleClick={() => incrementFeedback('neutral')} text='Neutral'/>
            <Button handleClick={() => incrementFeedback('bad')} text='Bad'/><br/>
            <h1>Statistics</h1>
            <Statistics bad={bad} neutral={neutral} good={good}/>
        </div>
    )
}

export default App;
