// This helper function chooses a baseball innning at random from the top of the 1st to the bottom of the 9th
const chooseInning = () => {
    const inning = Math.ceil(Math.random() * 9);
    const topOrBottom = Math.floor(Math.random() * 2);
    if (topOrBottom === 0) {
        return 'Top ' + inning;
    }
    return 'Bottom ' + inning;
}

// This helper function determines the number of outs at random from 0 to 2
const chooseOuts = () => Math.floor(Math.random() * 3);

// This helper function randomly determines how the runners are positioned on base
const chooseRunners = () => {

}

// This helper function randomly determines if the hitter is a lefty or righty
const chooseStance = () => {
    const stance = Math.floor(Math.random() * 2)
    if (stance === 0) {
        return 'lefty';
    }
    return 'righty';
}

// This helper function determines where in the lineup the batter is hitting
const chooseOrder = () => {
    const order = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
        const number = Math.floor(Math.random() * 9);
        return order[number];

    /* Here is an alternative way to write the same function. I decided to use the method above as it requires fewer lines of code.
        const order = Math.ceil(Math.random() * 9);
        if (order === 1) {
            return order + 'st';
        } else if (order === 2) {
            return order + 'nd';
        } else if (order === 3) {
            return order + 'rd';
        } else {
            return order + 'th';
        } */
}

// This main function calls each helper function above and displays the inning information in a single sentence.
const run = () => {
    let inning = chooseInning();
    let outs = chooseOuts();
    let stance = chooseStance();
    let order = chooseOrder();
    console.log(`${inning}, ${outs} outs. The hitter is batting ${stance} and is ${order} in the line-up.`)
}

run();