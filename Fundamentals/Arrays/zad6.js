function EvennOddSub(arr)
{
    let sumE=0,sumO=0;
    for (let index = 0; index < arr.length; index++) {
        arr[index] = parseInt(arr[index]);
        if(arr[index]%2==0) sumE+=arr[index];
        else sumO += arr[index];
    }

    let diff = sumE-sumO;
    console.log(diff);
}

EvennOddSub([1,2,3,4,5,6]);