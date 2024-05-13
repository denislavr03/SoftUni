function race(text) {
    let participants = text.shift().split(', ');
    let obj = {};
    for (const iterator of participants) {
        obj[iterator] = 0;

    }
    let currentRow = text.shift();
    let namePattern = /[A-Za-z]/g;
    let digitPattern = /[0-9]/g;

    while (currentRow !== "end of race") {
        let currentName = currentRow.match(namePattern).join('');
        let distance = currentRow.match(digitPattern);
        let currentDistance = 0;
        distance.map(d => currentDistance += Number(d));
        if (obj.hasOwnProperty(currentName)) {
            obj[currentName] += currentDistance;
        }

        currentRow = text.shift();
    }

    let arrObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${arrObj[0][0]}`);
    console.log(`2nd place: ${arrObj[1][0]}`);
    console.log(`3rd place: ${arrObj[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);