function biggerHalf(arr) {
    arr.sort((a, b) => b - a);
    let brr = [];
    for (let index = 0; index < arr.length / 2; index++) {
        brr.push(arr[index]);
    }
    brr.reverse();
    console.log(brr);
}

biggerHalf([4, 7, 2, 5]);