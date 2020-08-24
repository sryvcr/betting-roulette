import { Router, Request } from 'express';
import { RoulettesController } from "../../controllers/roulettes_controller";

const router = Router();
const roulettesCont = new RoulettesController();

router.get('/get-all', roulettesCont.get);
router.post('/create-one', roulettesCont.post);
router.post('/:id/open', roulettesCont.openRouletteById);
router.post('/:id/close', roulettesCont.closeRouletteById);
router.post('/create-bet', roulettesCont.createBet);

export { router };
