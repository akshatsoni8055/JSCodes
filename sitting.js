
function ArrayChallenge(arr) {
    const seats = arr.shift();
    const rows = Math.round(seats / 2);
    const seat = [];
    let idx = 0;
    for (row = 0; row < rows; row ++) {
        seat.push([]);
        for (col = 0; col < 2; col ++) {
            const isOccupied = arr.indexOf(idx + 1) > -1 ? true : false;
            seat[row].push(isOccupied);
            idx ++;
        }
    }

    let seating = 0;
    for (let i = 0; i < rows - 1; i ++) {
        if ((seat[i][0] === false) && (seat[i][1] === false)) seating ++;
        if ((seat[i][0] === false) && (seat[i + 1][0] === false)) seating ++;
        if ((seat[i][1] === false) && (seat[i + 1][1] === false)) seating ++;
    }
    if ((seat[rows - 1][0] == false) && (seat[rows - 1][1] == false)) seating ++;
    return seating;
}


console.log(ArrayChallenge( [12, 2, 6, 7, 11] ))