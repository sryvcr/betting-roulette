const ROULETTE_CREATION_STATUS = 0

export function buildCreateRoulette(roulettesRepo: any) {

    return async function execute() {
        const roulette: any = await roulettesRepo.createOne(ROULETTE_CREATION_STATUS);
        return { id: roulette.id };
    }
}
