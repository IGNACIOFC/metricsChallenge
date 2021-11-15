import {useState, useEffect} from 'react'
import axios from 'axios'
import Book from './components/Book.js'
import BarChart from './components/BarChart.js'
import Stats from './components/Stats.js'
import './App.css';


function App() {
  const [loading, setLoading] = useState(true)
  const [metricsState, setMetricsState] = useState()
  const [chart, setChart] = useState('1')

  async function fetchMetrics() {
    try {
      setLoading(true)
      const response = await axios.get("http://localhost:8000/api/metrics/now")
      setMetricsState(response.data);
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchMetrics()
  }, [])
  
  return (
    <div className="App">
      <Book fetchMetrics={fetchMetrics}/>
      {loading ? 'loading' : 
      <div className="metrics">
        <BarChart metrics={metricsState} chart={chart} setChart={setChart} />
        <Stats metrics={metricsState}/>
      </div>}
    </div>
  );
}

export default App;
