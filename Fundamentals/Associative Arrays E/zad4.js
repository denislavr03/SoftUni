function partyTime(guest) {
    let list =[];
    for (let index = 0; index < guest.length; index++) {
        if(guest[index] === "PARTY") break;
        else {
            list.push(guest.shift());
        }
    }
    guest.shift();
    
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);