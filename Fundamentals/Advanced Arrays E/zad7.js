function searchForNum(arr, specArr) {
    let elTake = specArr[0];
    let delEl = specArr[1];
    let num = specArr[2];
    let count = 0;
    let brr = [];
    for (let index = 0; index < elTake; index++) {
        brr.push(arr[index]);
    }
    console.log(brr);
    for (let index = 0; index < delEl; index++) {
        brr.shift(arr[index]);
    }
    console.log(brr);
    for (let index = 0; index < brr.length; index++) {
        if (num === brr[index]) count++;
    }
    console.log(`Number ${num} occurs ${count} times.`);
}

searchForNum([7, 1, 5, 8, 2, 7], [3, 1, 5])