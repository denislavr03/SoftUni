function addressBook(arr) {
    let obj = {};
    for (let key of arr) {
        let [name, adress] = key.split(':');
        obj[name] = adress;
    }
    let result = Object.entries(obj);
    result.sort((a,b) => a[0].localeCompare(b[0]));
    for (let key of result) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);