function lastKNumSeq(n, k) {
    let arr = [1];
    while (n > arr.length) {
        let brr = arr.slice(-k);
        let sum = 0;
        for (let index = 0; index < brr.length; index++) {
            sum += brr[index];
        }
        arr.push(sum);
    }
    console.log(arr.join(' '));
}

lastKNumSeq(6, 3);