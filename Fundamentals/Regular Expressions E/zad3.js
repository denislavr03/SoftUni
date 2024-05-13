function softuniBarIncome(text) {
    let pattern = /%(?<name>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
    let temp = pattern.exec(text);
    let totalIncome = 0;
    let incomePerPerson = 0;

    while (temp) {
        let name = temp.groups['name'];
        let product = temp.groups['product'];
        let quantity = temp.groups['quantity'];
        let price = temp.groups['price'];
        incomePerPerson = quantity * price;
        totalIncome += incomePerPerson;
        temp = pattern.exec(text);
        console.log(`${name}: ${product} - ${incomePerPerson.toFixed(2)}`);
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);