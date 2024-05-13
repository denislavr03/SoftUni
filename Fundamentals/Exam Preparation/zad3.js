function pirates(arr) {
    let cititesToPlunder = [];
    for (const iterator of arr) {
        if (iterator === "Sail") {
            break;
        }
        else {
            cititesToPlunder.push(iterator);
        }
    }
    let commandArr = [];
    for (const iterator of arr) {
        commandArr.push(iterator);
        while (commandArr.includes('Sail')) {
            commandArr.shift();
        }
    }


    for (const iterator of commandArr) {
        let [cmd, plunderedCity, killed, takenGold] = iterator.split('=>');
    }
    for (const iterator of cititesToPlunder) {
        let [name, population, gold] = iterator.split('||');
    }
    
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);