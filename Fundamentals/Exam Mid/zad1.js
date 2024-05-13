function expGaining(arr) {
    arr.map(Number);
    let xpNeeded = arr.shift();
    let battleCount = arr[0];
    let sum = 0;
    let count = 0;
    for (let index = 1; index < arr.length; index++) {
        if (index % 3 === 0) sum += arr[index] + (arr[index] * 0.15);
        else if (index % 5 === 0) sum += arr[index] - (arr[index] * 0.1);
        else if (index % 15 === 0) sum += arr[index] + (arr[index] * 0.05);
        else sum += arr[index];
        count++;
        if (sum >= xpNeeded) {
            console.log(`Player successfully collected his needed experience for ${count} battles.`);
            return;
        }
    }
    if (xpNeeded > sum) {
        console.log(`Player was not able to collect the needed experience, ${(xpNeeded - sum).toFixed(2)} more needed.`);
        return;
    }
}

expGaining([500, 5, 50, 100, 200, 100, 20])