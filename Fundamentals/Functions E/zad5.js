function palindromeNum(arr) {
    for (let index = 0; index < arr.length; index++) {
        let num = arr[index].toString();
        let revNum = num.split('').reverse().join('');
        if(Number(num) == Number(revNum)) console.log("true");
        else console.log("false");
    }
}

palindromeNum([32, 2, 232, 1010]);