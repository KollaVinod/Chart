import React from 'react'
import './TimeframeSelector.css'

const TimeframeSelector = ({onSelect}) => (
  <div className="timeframe-selector">
    <button onClick={() => onSelect('daily')} className="btn-primary">
      Daily
    </button>
    <button onClick={() => onSelect('weekly')} className="btn-primary">
      Weekly
    </button>
    <button onClick={() => onSelect('monthly')} className="btn-primary">
      Monthly
    </button>
  </div>
)

export default TimeframeSelector
