function MaxNum(arr)
{
    let brr = [],temp = 0;

    for (let index = 0; index < arr.length; index++) {
        for (let j = 1; j < arr.length; j++) {
            if(arr[index]>arr[j]) 
            {               
                /*if(arr[index] > temp)*/ brr[index] = arr[index];
                //temp = Number(arr[index]);
            }
        }
    }
    brr[brr.length] = arr[arr.length-1];
    let unique = [... new Set(brr)];
    console.log(unique.join(" "));
}

MaxNum([41, 41, 34, 20] );