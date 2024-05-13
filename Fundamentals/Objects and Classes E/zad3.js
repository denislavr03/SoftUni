function storeProvision(arr, brr) {
    let obj = {};
    for (let index = 0; index < arr.length; index += 2) {
        obj[arr[index]] = Number(arr[index + 1]);
    }
    for (let index = 0; index < brr.length; index += 2) {
        if (!obj.hasOwnProperty(brr[index])) {
            obj[brr[index]] = 0;
        }
        obj[brr[index]] += Number(brr[index+1]);
    }
    for (const product in obj) {
        console.log(`${product} -> ${obj[product]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]);