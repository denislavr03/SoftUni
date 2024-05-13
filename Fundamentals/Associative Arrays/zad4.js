function storage(arr) {
    let map = new Map();

    for (let key of arr) {
        let [name, quantity] = key.split(' ');
        if (!map.has(name)) {
            map.set(name, +Number(quantity));
        }
        else {
            let currQuantity = map.get(name);
            let newQuantity = currQuantity += Number(quantity);
            map.set(name, newQuantity);
        }
    }

    for (let key of map) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);