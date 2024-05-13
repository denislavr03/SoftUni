function shoppingList(arr) {
    let list = arr[0].split('!');
    for (let index = 1; index < arr.length; index++) {
        let tasknProd = arr[index].split(' ');
        switch (tasknProd[0]) {
            case 'Urgent':
                if (!list.includes(tasknProd[1])) {list.unshift(tasknProd[1]);}
                break;
            case 'Unnecessary':
                if (list.includes(tasknProd[1])) {list.splice(index, 1);}
                break;
            case 'Correct':
                if (list.includes(tasknProd[1])) {
                    if (list.indexOf(tasknProd[1]) !== -1) {
                        list[list.indexOf(tasknProd[1])] = tasknProd[2];
                    }
                }
                break;  
            case 'Rearrange':
                if (list.includes(tasknProd[1])) {list.push(tasknProd[1]); list.splice(index, 1);}
                break;
            case 'Go':
                break;
        }
    }
    console.log(list.join(', '));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);