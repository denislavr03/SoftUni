function firstnLastKNum(arr) {
    let k = Number(arr.splice(0, 1));
    let brr = [];
    brr = arr.slice(0, k);
    arr = arr.slice(-k);
    console.log(brr.join(' '));
    console.log(arr.join(' '));
}

firstnLastKNum([3, 6, 7, 8, 9]);