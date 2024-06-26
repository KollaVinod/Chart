import chartData from './chartData.json'

export const fetchChartData = async () => {
  // Simulating fetching data from a JSON file
  return new Promise(resolve => {
    setTimeout(() => resolve(chartData), 500) // Simulating a delay
  })
}
