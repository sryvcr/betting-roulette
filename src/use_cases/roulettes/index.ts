import { RoulettesPSQLRepo } from "../../services/databases/pgsql/repositories/roulettes_repo";
import { buildRoulettesList, buildCountList } from "./get_all";
import { buildOpenRoulette } from "./open_roulette";
import { buildCloseRoulette } from "./close_roulette";

const roulettesRepo = new RoulettesPSQLRepo();

const getList = buildRoulettesList(roulettesRepo);
const countList = buildCountList(roulettesRepo);
const openRoulette = buildOpenRoulette(roulettesRepo);
const closeRoulette = buildCloseRoulette(roulettesRepo);

const service = {
    getList,
    countList,
    openRoulette,
    closeRoulette,
}
export default service;
