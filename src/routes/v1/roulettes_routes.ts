import { Router } from 'express';
import { RoulettesController } from "../../controllers/roulettes_controller";

const router = Router();
const roulettesCont = new RoulettesController();

router.get('/get-all', roulettesCont.get);
router.get('/:id/open', roulettesCont.openRouletteById);
router.post('/:id/close', roulettesCont.closeRouletteById);

export { router };
