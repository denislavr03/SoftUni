function bombNum(arr, bombs) {
    let bomb = bombs[0];
    let power = bombs[1];
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === bomb) {
            arr.splice(index - power, power);
            arr.splice(index - power, power + 1);
        }
    }
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    console.log(sum);
}

bombNum([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])