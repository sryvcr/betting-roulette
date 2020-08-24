import { ErrorResourceNotFound } from "../../services/errors/common/resource_not_found";
import { ErrorBadRequest } from "../../services/errors/common/bad_request";

const ROULETTE_OPEN_STATUS = 1

export function buildOpenRoulette(roulettesRepo: any) {

    return async function execute(id: number) {
        const roulette: any = await roulettesRepo.getItemById(id);
        if (roulette === undefined)
            throw new ErrorResourceNotFound("roulette not found");
        verifyRouletteStatus(parseInt(roulette.roulette_status_id));
        const updatedCount = await roulettesRepo.updateStatus(id, ROULETTE_OPEN_STATUS);
        return updatedCount;
    }

    function verifyRouletteStatus(rouletteStatusId: number) {
        if (rouletteStatusId !== 0)
            throw new ErrorBadRequest("roulette cannnot be opened");
    }
}
