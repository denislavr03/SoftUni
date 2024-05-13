function EqualSums(arr)
{
    let lSum=0,rSum=0;
    for (let index = 0; index < arr.length; index++) {
        for (let j = index+1; j < arr.length; j++) {
            for (let k = index-1; k >= 0; k--) {
                lSum += arr[k];
                //console.log(`1 ${lSum}`);
            }
            rSum += arr[j];
            //console.log(`2 ${rSum}`);
        }
        if(lSum == rSum) {console.log(index); break;}
        else{lSum = 0; rSum = 0;}
    }
}

EqualSums([1,2,3]);