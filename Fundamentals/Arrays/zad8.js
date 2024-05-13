function CondenseArrTNum(arr)
{
    let cond = [];

    if(arr.length == 1) console.log(1);
    else
    {
        while(arr.length != 1)
        {
            for (let index = 0; index < arr.length-1; index++) {
                cond.length = arr.length-1;
                cond[index] = arr[index] + arr[index+1];
                arr[index] = cond[index];
            }
            arr.length--;
        }
        console.log(cond.join(" "));
    }   
} 
CondenseArrTNum([1]);