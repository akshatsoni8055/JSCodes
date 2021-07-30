
function ArrayChallenge (arr) {

    let maxProfit = 0; // initialize max

    let lowestPrice = arr[0];

    for(let i = 1; i < arr.length; i++){

        let price = arr[i];

        if(price < lowestPrice) lowestPrice = price;

        let profit = price - lowestPrice;

        maxProfit = Math.max(profit, maxProfit);


    }
    return maxProfit;

}

console.log(ArrayChallenge([44, 30, 24, 32, 35, 30, 40, 38, 15]))