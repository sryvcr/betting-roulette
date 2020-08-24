import { RoulettesPSQLRepo } from "../../services/databases/pgsql/repositories/roulettes_repo";
import { buildRoulettesList, buildCountList } from "./get_all";

const roulettesRepo = new RoulettesPSQLRepo();

const getList = buildRoulettesList(roulettesRepo);
const countList = buildCountList(roulettesRepo);

const service = {
    getList,
    countList,
}
export default service;
