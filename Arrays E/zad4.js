function ArrRotation(arr,num)
{
    for (let index = 0; index < num; index++) {
        let first = arr.shift();
        arr.push(first);
    }
    console.log(arr.join(" "));
}

ArrRotation([51, 47, 32, 61, 21],2);