function nonDecSubset(arr) {
    let brr = [];
    brr.push(arr[0]);
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < arr[index + 1]) brr.push(arr[index + 1]);
    }
    for (let index = 0; index < brr.length; index++) {
        if (brr[index] > brr[index + 1]) {
            brr.pop();
        }
    }
    console.log(brr.join(' '));
}

nonDecSubset([20, 3, 2, 15, 6, 1]);