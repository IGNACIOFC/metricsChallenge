import {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'


function BarChart ({metrics, chart, setChart}) {
  let labels = []
  let values = []

  switch(chart) {
    case '1':
      labels = metrics.minuteMetrics.labels
      values = metrics.minuteMetrics.values
      break;
    case '2':
      labels = metrics.hourlyMetrics.labels
      values = metrics.hourlyMetrics.values
      break;
    case '3':
      labels = metrics.dailyMetrics.labels
      values = metrics.dailyMetrics.values
      break;
  }

  const changeChart = (value) => {
    setChart(value)
  }

  return(
    <div className="chart_container">
      <div className="buttons_container">
        <button className="button" onClick={()=>changeChart('1')}>1M</button>
        <button className="button" onClick={()=>changeChart('2')}>1H</button>
        <button className="button" onClick={()=>changeChart('3')}>1D</button>
      </div>
      <Bar
      data={{
        labels: labels,
        datasets: [{
          label: '$ Total Sales',
          data: values,
          backgroundColor: "#d83959",
        }]
      }}
      options={{
        
      }}
      />
    </div>  
  )
}

export default BarChart;