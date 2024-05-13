function convertToObj(str) {
    let person = JSON.parse(str);
    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');