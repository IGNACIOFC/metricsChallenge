import {useState, useEffect} from 'react'
import {Bar} from 'react-chartjs-2'


function BarChart ({metrics, chart, setChart}) {

  const changeChart = (value) => {
    setChart(value)
  }
  console.log(metrics.minuteMetrics.labels)
  return(
    <div>
      <div>
        <button onClick={()=>changeChart('1')}>1M</button>
        <button onClick={()=>changeChart('2')}>1H</button>
        <button>1D</button>
      </div>
      <Bar
      data={{
        labels: chart === '1' ? metrics.minuteMetrics.labels : metrics.hourlyMetrics.labels,
        datasets: [{
          data: chart === '1' ? metrics.minuteMetrics.values : metrics.hourlyMetrics.values
        }]
      }}
      options={{
        
      }}
      >

      </Bar>
    </div>  
  )
}

export default BarChart;