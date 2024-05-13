function furniture(text) {
    let pattern = />>(?<name>[A-z]+)<<(?<price>\d+.\d+)!(?<quantity>\d+)/g;
    let temp = pattern.exec(text);
    let totalPrice = 0;

    console.log("Bought furniture:");
    while (temp) {
        let name = temp.groups['name'];
        let price = temp.groups['price'];
        let quantity = temp.groups['quantity'];
        totalPrice += price * quantity;
        temp = pattern.exec(text);
        console.log(name);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);