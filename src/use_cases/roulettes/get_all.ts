function buildRoulettesList(roulettesRepo: any) {

    return async function execute() {
        const roulettesList: any[] = await roulettesRepo.getAllItems();
        return roulettesList;
    }
}

function buildCountList(roulettesRepo: any) {

    return async function execute() {
        const countItems: number = await roulettesRepo.countItems();
        return countItems;
    }
}

const service = {
    buildRoulettesList,
    buildCountList,
}
export default service;
export {
    buildRoulettesList,
    buildCountList,
}
