function meetings(arr) {
    let obj = {};
    for (let key of arr) {
        let [day, name] = key.split(' ');
        if (!obj.hasOwnProperty(day)) {
            obj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        else console.log(`Conflict on ${day}!`);
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);