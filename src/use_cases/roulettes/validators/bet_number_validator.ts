export function betNumberValidator(betNumber: number) {
    if (betNumber >= 0 && betNumber <= 36) return true;
    else return false;
}
