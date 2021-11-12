import {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'


function BarChart ({metrics, chart, setChart}) {
  let labels = []
  let values = []

  const changeChart = (value) => {
    setChart(value)
  }

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

  
  console.log(metrics.minuteMetrics.labels)
  return(
    <div className="chart_container">
      <div className="buttons_container">
        <button className="buttons" onClick={()=>changeChart('1')}>1M</button>
        <button className="buttons" onClick={()=>changeChart('2')}>1H</button>
        <button className="buttons" onClick={()=>changeChart('3')}>1D</button>
      </div>
      <Bar
      data={{
        labels: labels,
        datasets: [{
          data: values
        }]
      }}
      options={{
        
      }}
      />
    </div>  
  )
}

export default BarChart;