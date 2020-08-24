import { betNumberValidator } from "./validators/bet_number_validator";
import { betColorValidator } from "./validators/bet_color_validator";
import { betMaxMoneyValidator } from "./validators/bet_max_money_validator";
import { requiredParamValidator } from "../../common/validators/required_param_validator";
import { ErrorEntityValidation } from "../../services/errors/common/error_entity_validation";
import { ErrorBadRequest } from "../../services/errors/common/bad_request";

export function buildCreateRouletteBet(roulettesRepo: any, betsRepo: any) {

    return async function execute({
        number,
        color,
        money,
        userId,
        rouletteId
    }: any ) {
        validateBet({
            number,
            color,
            money,
            userId,
            rouletteId
        });
        await checkRouletteIsOpen({ rouletteId });
        const betCreated: any = await betsRepo.createOne({
            number,
            color,
            money,
            userId,
            rouletteId
        });
        return betCreated;
    }

    async function checkRouletteIsOpen({ rouletteId }: any ) {
        const roulette: any = await roulettesRepo.getItemById(rouletteId);
        if (parseInt(roulette.roulette_status_id) !== 1)
            throw new ErrorBadRequest("roulette is not open");
    }

    function validateBet({
        number,
        color,
        money,
        userId,
        rouletteId
    }: any ) {
        if(number)
            if(!betNumberValidator(number))
                throw new ErrorEntityValidation({ message: "bet number must be between 0 and 36" });
        if(color)
            if(!betColorValidator(color))
                throw new ErrorEntityValidation({ message: "bet color must be black or red" });
        if(!betMaxMoneyValidator(money))
            throw new ErrorEntityValidation({ message: "the maximum bet amount is 10000" });
        if(!requiredParamValidator(userId))
            throw new ErrorEntityValidation({ message: "user_id is required" });
        if(!requiredParamValidator(rouletteId))
            throw new ErrorEntityValidation({ message: "user_id is rouletteId" });
    }
}
