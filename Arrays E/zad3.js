function MergeArr(arr,brr)
{
    let crr = [];
    if(arr.length != brr.length) return 0;

    for (let index = 0; index < arr.length; index++) {
        if(index % 2 == 0) crr[index] = Number(arr[index]) + Number(brr[index]);
        else crr[index] = arr[index]+brr[index];
    }
    console.log(crr.join(" - "));
}

MergeArr(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11']);