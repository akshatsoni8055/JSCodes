function ArrayChallenge(arr) {
    let N = arr.shift();
    let hungers = arr;
    let diffs = differences(hungers);
    if (N >= diffs){ return 0 }
    while (N > 0 && sum(diffs) > 0) {
            let combos = [];
            for (let i = 0; i < hungers.length; i++) {
            let combo = hungers.slice();
            combo[i]--;
            combos.push(combo);
        }

        hungers = combos.reduce(minDiff);
        N--;

        diffs = differences(hungers);
}

return sum(diffs);
}

function differences(array) {
let diffs = [];

for (let i = 0; i < array.length - 1; i++) {
    diffs.push(Math.abs(array[i] - array[i + 1]));
}
return diffs;
}

function sum(array) {
return array.reduce((p, c) => p + c, 0);
}

function minDiff(arr1, arr2) {
    if(sum(differences(arr1)) <= sum(differences(arr2))){
        return arr1;
    } else {
        return arr2;
    }
}


console.log(ArrayChallenge( [3, 2, 1, 0, 4, 1, 0]))