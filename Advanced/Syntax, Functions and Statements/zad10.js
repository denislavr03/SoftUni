function aggEl(arr) {
    let sum = 0;
    let oSum = 0;
    let cSum = "";
    for (const iterator of arr) {
        sum += iterator;
        oSum += 1/iterator;
        cSum += iterator;
    }

    console.log(sum);
    console.log(oSum);
    console.log(cSum);
}

aggEl([1, 2, 3]);