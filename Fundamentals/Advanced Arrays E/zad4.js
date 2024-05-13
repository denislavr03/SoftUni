function sorting(arr) {
    let sorted = arr.sort((a, b) => b - a);
    let brr = [];
    let len = sorted.length;
    for (let index = 0; index < len / 2; index++) {
        let numNow = sorted.shift();
        let lastNum = sorted.pop();
        brr.push(numNow);
        brr.push(lastNum);
    }
    console.log(brr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);