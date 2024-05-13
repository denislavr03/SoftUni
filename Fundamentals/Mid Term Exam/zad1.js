function blackFlag(input) {
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expPlunder = Number(input[2]);
    let totalPlunder = 0;
    for (let index = 1; index <= days; index++) {
        if (index % 3 === 0) totalPlunder += dailyPlunder + (0.5 * dailyPlunder);
        else if (index % 5 === 0) { totalPlunder += dailyPlunder; totalPlunder -= 0.3 * totalPlunder; }
        else totalPlunder += dailyPlunder;
    }
    let percentage = (totalPlunder / expPlunder) * 100;
    if (totalPlunder < expPlunder) console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    else if(totalPlunder >= expPlunder) console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
}

blackFlag(["10", "20", "380"]);