import { RoulettesPSQLRepo } from "../../services/databases/pgsql/repositories/roulettes_repo";
import { buildRoulettesList, buildCountList } from "./get_all";
import { buildOpenRoulette } from "./open_roulette";

const roulettesRepo = new RoulettesPSQLRepo();

const getList = buildRoulettesList(roulettesRepo);
const countList = buildCountList(roulettesRepo);
const openRoulette = buildOpenRoulette(roulettesRepo);

const service = {
    getList,
    countList,
    openRoulette,
}
export default service;
