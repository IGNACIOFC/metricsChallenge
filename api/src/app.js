import express from 'express';
import cors from 'cors';
import MetricsRoutes from './routes/metrics.routes'

const app = express();

app.set('port', process.env.PORT || 8000)

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.json({message: 'Welcome to my app'})
})

app.use('/api/metrics', MetricsRoutes)

export default app;