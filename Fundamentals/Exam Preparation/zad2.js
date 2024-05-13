function adAstra(text) {
    let pattern = /([#|])(?<name>[A-Za-z\s]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/g;
    let match = pattern.exec(text);
    let totalCalories = 0;
    let days = 0;
    let arr = [];
    while (match) {
        let name = match.groups['name'];
        let date = match.groups['date'];
        let calories = Number(match.groups['calories']);
        totalCalories += calories;
        arr.push(name);
        arr.push(date);
        arr.push(calories);
        days = Math.floor(totalCalories / 2000);
        match = pattern.exec(text);
    }
    console.log(`You have food to last you for: ${days} days!`);
    for (let index = 0; index < arr.length; index += 3) {
        console.log(`Item: ${arr[index]}, Best before: ${arr[index + 1]}, Nutrition: ${arr[index + 2]}`);
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);