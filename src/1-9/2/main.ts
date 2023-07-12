export const sumOfFibonacciUpto = (limit: number) => {
    let nM1term = 1;
    let nThterm = 2;
    let sumOfEven = 2;

    while (nThterm < limit) {

        let newTerm = nThterm + nM1term;

        if (newTerm % 2 == 0) {
            sumOfEven += newTerm;
        }

        nM1term = nThterm;
        nThterm = newTerm;
    }

    return sumOfEven;
}