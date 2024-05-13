function pointsValidation(arr) {
    let x = 0, y = 0, result = 0;
    let o = arr[0], t = arr[1], th = arr[2], f = arr[3];
    for (let index = 0; index < arr.length; index += 2) {
        x = Number(arr[index]);
        y = Number(arr[index + 1]);
        result = Math.sqrt(Math.pow(x-0, 2) + Math.pow(y-0, 2));
        if (Number.isInteger(result)) console.log(`{${x}, ${y}} to {0, 0} is valid`);
        else console.log(`{${x}, ${y}} to {0, 0} is invalid`);
    }
    result = Math.pow((arr[0] - arr[2]), 2) + Math.pow((arr[1] - arr[3]), 2);
    if (Number.isInteger(result)) console.log(`{${o}, ${th}} to {${t}, ${f}} is valid`);
    else console.log(`{${o}, ${th}} to {${t}, ${f}} is invalid`);
}

pointsValidation([2, 1, 1, 1]);