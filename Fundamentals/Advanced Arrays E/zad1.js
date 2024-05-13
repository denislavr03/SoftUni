function train(arr) {
    let el = arr[0].split(' ').map(Number);
    let max = Number(arr.splice(1, 1));

    for (let index = 1; index < arr.length; index++) {
        let op = arr[index].split(' ');
        if (op[0] == 'Add') el.push(Number(op[1]));
        else {
            let passengers = Number(op[0]);
            for (let j = 0; j < el.length; j++) {
                if (max - el[j] >= passengers) {
                    el[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(el.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
