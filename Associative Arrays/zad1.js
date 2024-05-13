function phoneBook(arr) {
    let obj = {};
    for (let key of arr) {
        let [name, phoneNum] = key.split(' ');
        obj[name] = phoneNum;
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);