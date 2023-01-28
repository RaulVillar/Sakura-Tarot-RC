
export function shuffleArray(arr) {

    const copy = [...arr];
    const output = [];

    while (output.length < 5) {

        output.push(copy.splice(Math.round(Math.random() * copy.length), 1));
    }
    return output;
};
