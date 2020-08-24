import { Router } from 'express';
import { router as roulettesRoutes } from './roulettes_routes';

const routes = Router();

routes.use('/roulettes', roulettesRoutes);

export { routes };
