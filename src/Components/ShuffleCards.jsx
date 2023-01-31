
export function shuffleArray(arr) {

    const output = [];

    while (output.length < 5) {

        output.push(arr.splice(Math.round(Math.random() * arr.length), 1));
    }
    return output;
};
