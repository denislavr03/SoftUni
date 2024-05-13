function employees(arr) {
    let obj = {};
    for (let index = 0; index < arr.length; index++) {
        obj = {
            name: arr[index],
            id: arr[index].length
        };
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.id}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);