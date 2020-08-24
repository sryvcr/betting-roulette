export function requiredParamValidator(requiredParam: string | undefined) {
    if (requiredParam) return true
    else return false;
}
