function processOddPositions(arr) {
    let brr = [];
    arr.forEach((a,index) => {if(index%2 !== 0) brr.push(a*2)});
    console.log(brr.reverse().join(" "));
}

processOddPositions([5, 0, 10, 4, 7, 3]);