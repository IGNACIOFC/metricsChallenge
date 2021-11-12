import Metric from '../models/Metric';
import moment from 'moment';

import {
  thirtyMinutesLess, oneDayLess, oneWeekLess
} from "../utils"


export const findAllMetrics = async (req, res) => {
  const metrics = await Metric.find();
  console.log(metrics)
  res.json(metrics)
}

export const createMetric = async (req, res) => {
  const newMetric = new Metric({
    name: req.body.name,
    price: req.body.price
  });
  const metricSaved = await newMetric.save();
  res.json(metricSaved)
}

export const findMetrics = async(req, res) => {

  let metrics = {
    minuteMetrics: {
      labels: [],
      values: [] 
    },
    hourlyMetrics:{
      labels: [],
      values: []
    },
    dailyMetrics:{
      labels: [],
      values: []
    }
  }

  let getMinuteMetrics = await Metric.find({
    createdAt: {
        $gte:thirtyMinutesLess(),
        $lte:new Date()
     }
  });

  metrics.minuteMetrics = startMinutes(getMinuteMetrics)
  
  

  const getHourlyMetrics = await Metric.find({
    createdAt: {
        $gte: oneDayLess(),
        $lte: new Date()
     }
  });

  metrics.hourlyMetrics = startHours(getHourlyMetrics);

  const getDailyMetrics = await Metric.find({
    createdAt: {
        $gte: oneWeekLess(),
        $lte: new Date()
     }
  });

  metrics.dailyMetrics = startDays(getDailyMetrics);

   
  res.json(metrics)
}

const startMinutes = (data) => {
  const response = {};
  const times = createTimes();
  const prices = createPrices(data, times);
  response.labels = times.map(time => moment(time).format('HH:mm'));
  response.values = prices
  return response
}

const createTimes = (time = moment()) =>  Array.from({length:30},(_, i) => moment(time).subtract(i, 'minutes')).reverse();

const createPrices = (data = [], times = []) => {
  return times.map(t => {
      const items = data.filter(item => moment(item.createdAt).isSame(t, 'minute'), []);
      if (items && Array.isArray(items) && items.length > 0 ) 
          return items.map(x=> parseInt(x.price)).reduce((p,n)=> p+n);
      return 0
  });
}

const startHours = (data) => {
  const response = {};
  const times = createHourTimes();
  const prices = createHourPrices(data, times);
  response.labels = times.map(time => moment(time).format('HH:mm'));
  response.values = prices
  return response
}

const createHourTimes = (time = moment()) =>  Array.from({length:24},(_, i) => moment(time).subtract(i, 'hours')).reverse();

const createHourPrices = (data = [], times = []) => {
  return times.map(t => {
      const items = data.filter(item => moment(item.createdAt).isSame(t, 'hour'), []);
      if (items && Array.isArray(items) && items.length > 0 ) 
          return items.map(x=> parseInt(x.price)).reduce((p,n)=> p+n);
      return 0
  });
}

const startDays = (data) => {
  const response = {};
  const times = createDailyTimes();
  const prices = createDailyPrices(data, times);
  response.labels = times.map(time => moment(time).format("ddd, hA"));
  response.values = prices
  return response
}

const createDailyTimes = (time = moment()) =>  Array.from({length:7},(_, i) => moment(time).subtract(i, 'days')).reverse();

const createDailyPrices = (data = [], times = []) => {
  return times.map(t => {
      const items = data.filter(item => moment(item.createdAt).isSame(t, 'day'), []);
      if (items && Array.isArray(items) && items.length > 0 ) 
          return items.map(x=> parseInt(x.price)).reduce((p,n)=> p+n);
      return 0
  });
}
