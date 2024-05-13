function ReverseArr(n,arr)
{
    let arr2=[];

    for (let index = 0; index < n; index++) {
        arr2.push(arr[index]);
    }

    for (let index = 0; index < arr2.length/2; index++) {
        let fEl = arr2[index];
        let lEl = arr2[arr2.length-1-index];
        arr2[index] = lEl;
        arr2[arr2.length-1-index] = fEl;
    }

    console.log(arr2.join(" "));
}

ReverseArr(3,[10,20,30,40,50]);