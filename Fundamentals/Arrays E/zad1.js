function AddnSub(arr)
{
    let oSum=0,nSum=0;
    for (let index = 0; index < arr.length; index++) {
        oSum += arr[index];
    }
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]%2==0) arr[index] += index;
        else arr[index] -= index;
        nSum += arr[index];
    }

    console.log(`[ ${arr.join(", ")} ]`);
    console.log(oSum);
    console.log(nSum);
}

AddnSub([5,15,23,56,35]);