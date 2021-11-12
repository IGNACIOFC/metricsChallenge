import {useState, useEffect} from 'react'
import axios from 'axios'
import Book from './components/Book.js'
import BarChart from './components/BarChart.js'
import './App.css';

let metrics = {
  minuteMetrics: {
    labels: ['02:46','02:47','02:48','02:49','02:50'],
    values: [3,5,2,7,10]
  },
  hourlyMetrics:{
    labels: ['01:00', '02:00', '03:00', '04:00', '05:00'],
    values: [9, 5, 6, 3, 8]
  },
  dailyMetrics:{
    labels: [],
    values: []
  }
}
function App() {
  const [loading, setLoading] = useState(false)
  const [metricsState, setMetricsState] = useState(metrics)
  const [chart, setChart] = useState('1')
  
  useEffect(() => {
    async function fetchMetrics () {
      try {
        setLoading(true)
        const response = await axios.get("http://localhost:8000/api/metrics/now")
        setMetricsState(response.data)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    fetchMetrics()
  }, [])
  
  
  console.log(metricsState)
  return (
    <div className="App">
      <Book />
      {loading ? 'loading' : 
      <BarChart metrics={metricsState} chart={chart} setChart={setChart} />
      }
    </div>
  );
}

export default App;
