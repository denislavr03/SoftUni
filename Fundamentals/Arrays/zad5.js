function SumEvenNum(arr)
{
    let sum=0;
    for (let index = 0; index < arr.length; index++) {
        arr[index] = parseInt(arr[index]);
        if(arr[index]%2 == 0) sum+=arr[index];
    }
    console.log(sum);
}

SumEvenNum(["1","2","3","4","5","6"]);