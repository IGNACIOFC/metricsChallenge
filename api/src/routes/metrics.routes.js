import {Router} from 'express';
import {findAllMetrics, createMetric, findMetrics} from "../controllers/metric.controller"

const router = Router();

router.get('/', findAllMetrics)

router.get('/now', findMetrics)

router.post('/', createMetric)


export default router;

