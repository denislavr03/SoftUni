function processOddNum(arr) {
    let brr = [];
    brr = arr.filter((el, i) => i % 2 == 1)
        .map(el => el * 2)
        .reverse()
        .join(' ');
    console.log(brr)
}

processOddNum([3, 0, 10, 4, 7, 3]);