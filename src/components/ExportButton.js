import React from 'react'
import html2canvas from 'html2canvas'
import './ExportButton.css'

const ExportButton = ({chartRef}) => {
  const handleExport = () => {
    html2canvas(chartRef.current).then(canvas => {
      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/png')
      link.download = 'chart.png'
      link.click()
    })
  }

  return (
    <div className="export-button">
      <button onClick={handleExport} className="btn-primary">Export as PNG</button>
    </div>
  )
}

export default ExportButton
