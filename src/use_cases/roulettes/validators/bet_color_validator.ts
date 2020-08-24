export function betColorValidator(color: string) {
    const colorList = [
        "red",
        "black",
    ];
    if (colorList.includes(color)) return true;
    else return false;
}
