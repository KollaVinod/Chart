import React, {useState, useEffect, useRef} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from 'recharts'
import ExportButton from './ExportButton'
import {fetchChartData} from '../data/dataService'

const filterDataByTimeframe = (data, timeframe) => {
  const now = new Date()
  switch (timeframe) {
    case 'daily':
      return data // Display the full data for daily view
    case 'weekly':
      return data.filter(item => {
        const date = new Date(item.timestamp)
        const oneWeekAgo = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 7,
        )
        return date >= oneWeekAgo
      })
    case 'monthly':
      return data.filter(item => {
        const date = new Date(item.timestamp)
        const oneMonthAgo = new Date(
          now.getFullYear(),
          now.getMonth() - 1,
          now.getDate(),
        )
        return date >= oneMonthAgo
      })
    default:
      return data
  }
}

const Chart = ({timeframe}) => {
  const chartRef = useRef(null)
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const chartData = await fetchChartData()
      setData(chartData)
    }
    getData()
  }, [])

  const filteredData = filterDataByTimeframe(data, timeframe)

  return (
    <div id='chart' ref={chartRef}>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='timestamp' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='value' stroke='#8884d8' />
          <Brush dataKey='timestamp' height={30} stroke='#8884d8' />
        </LineChart>
      </ResponsiveContainer>
      <ExportButton chartRef={chartRef} />
    </div>
  )
}

export default Chart
