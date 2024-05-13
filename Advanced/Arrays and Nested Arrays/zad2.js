function lastKNum(n, k) {
    let arr = [1];
    let result = 0;
    for (let index = 1; index < n; index++) {
        if (index <= 3) {
            result = Number(arr.slice(-index, k).reduce((acc, curr) => acc + curr));
            arr.push(result);
        }
        else {result = Number(arr.slice(index-k, k+index).reduce((acc, curr) => acc + curr));
        arr.push(result);}
    }
    console.log(arr);
}

lastKNum(6, 3);