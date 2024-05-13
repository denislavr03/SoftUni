function houseParty(arr) {
    let names = [];
    for (let index = 0; index < arr.length; index++) {
        let goingOrNot = arr[index].split(' ');
        if (goingOrNot.length == 3) {
            if (names.includes(goingOrNot[0])) {
                console.log(`${goingOrNot[0]} is already in the list!`);
            }
            else names.push(goingOrNot[0]);
        }
        else if (goingOrNot.length == 4) {
            if (!names.includes(goingOrNot[0])) {
                console.log(`${goingOrNot[0]} is not in the list!`);
            }
            else {
                names.pop(goingOrNot[0]);
            }
        }
    }
    console.log(names.join('\n'));
}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);