export const parseRisk = (risk: number) => {
    return Math.round(risk * 1000) / 10;
};
export const concatInOneString = (str: string) => {
    return str.split(" ").reduce((sum,prev) => (sum + prev), "")
};