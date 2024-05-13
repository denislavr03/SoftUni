function smallestTwoNum(arr){
    let brr = [];
    arr.sort((a,b) => a-b);
    brr.push(arr[0],arr[1]);
    console.log(brr.join(" "));
}

smallestTwoNum([30, 15, 50, 5]);