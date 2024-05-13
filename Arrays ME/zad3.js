function rotateArr(arr) {
    let lastEL = Number(arr[arr.length - 1]);
    let temp = '';
    arr.pop();
    let brr = arr;
    for (let index = 0; index < lastEL; index++) {
        temp = brr[brr.length - 1];
        brr.pop();
        brr.unshift(temp);
    }
    console.log(brr.join(' '));
}

rotateArr(['1', '2', '3', '4', '2']);