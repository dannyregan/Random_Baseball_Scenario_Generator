// This function chooses a baseball innning at random from the top of the 1st to the bottom of the 9th
const chooseInning = () => {
    const inning = Math.ceil(Math.random() * 9);
    const topOrBottom = Math.floor(Math.random() * 2);
    if (topOrBottom === 0) {
        return 'Top ' + inning;
    } else {
        return 'Bottom ' + inning;
    }
}

// This function determines the number of outs at random from 0 to 2
const chooseOuts = () => {
    return Math.floor(Math.random() * 3);
}

// This function randomly determines how the runners are positioned on base


// This function randomly determines if the hitter is a lefty or righty
const chooseStance = () => {
    const stance = Math.floor(Math.random() * 2)
    if (stance === 0) {
        return 'lefty';
    }
    return 'righty';
}

// This function determines where in the lineup the batter is hitting
const chooseOrder = () => {
    const order = Math.ceil(Math.random() * 9);
    if (order === 1) {
        return order + 'st';
    } else if (order === 2) {
        return order + 'nd';
    } else if (order === 3) {
        return order + 'rd';
    } else {
        return order + 'th';
    }
}