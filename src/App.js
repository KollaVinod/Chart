import React, {useState} from 'react'
import './App.css'
import Chart from './components/Chart'
import TimeframeSelector from './components/TimeframeSelector'

const App = () => {
  const [timeframe, setTimeframe] = useState('daily')

  const handleTimeframeChange = selectedTimeframe => {
    setTimeframe(selectedTimeframe)
  }

  return (
    <div className='app'>
      <h1 className='chart-text'>Charting Library Application</h1>
      <div className='chart-container'>
        <TimeframeSelector onSelect={handleTimeframeChange} />
        <Chart timeframe={timeframe} />
      </div>
    </div>
  )
}

export default App
