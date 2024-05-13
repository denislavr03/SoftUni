function listOfProducts(arr) {
    arr.sort();
    for (let index = 0; index < arr.length; index++) {
        console.log(`${index+1}.${arr[index]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions',
    'Apples']);