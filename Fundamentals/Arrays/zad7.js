function EqualArr(arr,brr)
{
    let isIdentical = true,sum=0,temp=0;
    if(arr.length != brr.length) {console.log("Arrays are not equal!"); return 0;}
    for (let index = 0; index < arr.length; index++) {
        arr[index] = Number(arr[index]);
        brr[index] = Number(brr[index]);
        if(arr[index] !== brr[index]) {isIdentical = false; temp=index;}
        else sum += arr[index];
    }

    if(isIdentical) console.log(`Arrays are identical. Sum: ${sum}`);
    else console.log(`Arrays are not identical. Found difference at ${temp} index`);
}

EqualArr(["10","20","30"],["10","20","30"]);