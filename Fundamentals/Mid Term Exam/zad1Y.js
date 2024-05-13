function softuniReception(arr) {
    let studPerHourSum = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
    let studCount = Number(arr[3]);
    let hours = 0;
    while (Math.floor(studCount / studPerHourSum) !== 0) {
        hours++;
        studCount -= studPerHourSum;
    }
    if (studCount !== 0) hours++;
    hours += Math.floor(hours / 3);
    console.log(`Time needed: ${hours}h.`);
}

softuniReception(['3', '2', '5', '40']);