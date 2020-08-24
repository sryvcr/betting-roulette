import { RoulettesPSQLRepo } from "../../services/databases/pgsql/repositories/roulettes_repo";
import { BetsPSQLRepo } from "../../services/databases/pgsql/repositories/bets_repo";
import { buildRoulettesList, buildCountList } from "./get_all";
import { buildCreateRoulette } from "./create_one";
import { buildOpenRoulette } from "./open_roulette";
import { buildCloseRoulette } from "./close_roulette";
import { buildCreateRouletteBet } from "./create_bet";

const roulettesRepo = new RoulettesPSQLRepo();
const betsRepo = new BetsPSQLRepo();

const getList = buildRoulettesList(roulettesRepo);
const countList = buildCountList(roulettesRepo);
const createOne = buildCreateRoulette(roulettesRepo);
const openRoulette = buildOpenRoulette(roulettesRepo);
const closeRoulette = buildCloseRoulette(roulettesRepo);
const createBet = buildCreateRouletteBet(roulettesRepo, betsRepo);

const service = {
    getList,
    countList,
    createOne,
    openRoulette,
    closeRoulette,
    createBet,
}
export default service;
