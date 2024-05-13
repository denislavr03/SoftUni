function MagicSum(arr, num) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        for (let j = index+1; j < arr.length; j++) {
            sum = Number(arr[index]) + Number(arr[j]);
            if (sum == num) console.log(`${arr[index]} ${arr[j]}`);
            else sum = 0;
        }
    }
}

MagicSum([1, 2, 3, 4, 5, 6],6);