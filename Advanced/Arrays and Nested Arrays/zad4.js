function negPosNum(arr) {
    let brr = [];
    let res = arr.map(a => a<0 ? brr.unshift(a) : brr.push(a));
    console.log(brr.join("\n"));
}

negPosNum([7, -2, 8, 9]);