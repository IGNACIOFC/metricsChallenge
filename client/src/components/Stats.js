
function Stats ({metrics}) {
  const averages = {}
  const getAverages = () => {
    
    let minuteValues = metrics.minuteMetrics.values
    let hourlyValues = metrics.hourlyMetrics.values
    let dailyValues = metrics.dailyMetrics.values

    let sumMinutes = minuteValues.reduce((previous, current) => current += previous);
    let sumHours = hourlyValues.reduce((previous, current) => current += previous);
    let sumDays = dailyValues.reduce((previous, current) => current += previous);

    averages.minuteAverage = Math.round((sumMinutes / minuteValues.length) * 100) / 100;
    averages.hourlyAverage = Math.round((sumHours / hourlyValues.length) * 100) / 100;
    averages.dailyAverage = Math.round((sumDays / dailyValues.length) * 100) / 100;
  }
  getAverages()

  return(
    <div className="average_container">
      <div className="average">
        <p className="digit">${averages.minuteAverage}</p>
        <p>Average sales per minute</p>
      </div>
      <div className="average">
        <p className="digit">${averages.hourlyAverage}</p>
        <p>Average sales per hour</p>
      </div>
      <div className="average">
        <p className="digit">${averages.dailyAverage}</p>
        <p>Average sales per day</p>
      </div>
    </div>
  )
}

export default Stats;