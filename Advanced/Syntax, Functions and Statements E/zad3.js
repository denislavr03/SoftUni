function sameNum(num){
    num = String(num);
    let arr = num.split("");
    let sum = Number(arr[0]);
    let isSame = true;
    for (let index = 1; index < arr.length; index++) {
        if(arr[index] != arr[index-1]){
            isSame = false;
        }
        sum += Number(arr[index]);
    }
    console.log(isSame);
    console.log(sum);
}

sameNum(2222222);