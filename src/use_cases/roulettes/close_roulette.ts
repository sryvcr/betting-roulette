import { ErrorResourceNotFound } from "../../services/errors/common/resource_not_found";
import { ErrorBadRequest } from "../../services/errors/common/bad_request";

const ROULETTE_CLOSE_STATUS = 2

export function buildCloseRoulette(roulettesRepo: any) {

    return async function execute(id: number) {
        const roulette: any = await roulettesRepo.getItemById(id);
        if (roulette === undefined)
            throw new ErrorResourceNotFound("roulette not found");
        verifyRouletteStatus(parseInt(roulette.roulette_status_id));
        const updatedCount = await roulettesRepo.updateStatus(id, ROULETTE_CLOSE_STATUS);
        if (updatedCount === 1) {
            const rouletteBets = getRouletteBets(id);
            return rouletteBets;
        }
        return;
    }

    function verifyRouletteStatus(rouletteStatusId: number) {
        if (rouletteStatusId !== 1)
            throw new ErrorBadRequest("roulette cannnot be closed");
    }

    function getRouletteBets(rouletteId: number) {
        const result = roulettesRepo.getBetsByRouletteId(rouletteId)
        return result;
    }
}
