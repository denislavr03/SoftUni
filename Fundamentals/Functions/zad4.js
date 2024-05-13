function orders(product,quan)
{
    let cofiP=1.5,waterP=1,cokeP=1.4,snackP=2;
    let cofi = (cofiP,quan) => cofiP*quan;
    let water = (waterP,quan) => waterP*quan;
    let coke = (cokeP,quan) => cokeP*quan;
    let snack = (snackP,quan) => snackP*quan;
    let sum=0;
    switch(product)
    {
        case "coffee": sum = cofi(cofiP,quan); break;
        case "water": sum = water(waterP,quan); break;
        case "coke": sum = coke(cokeP,quan); break;
        case "snack": sum = snack(snackP,quan); break;
    }

    console.log(sum.toFixed(2));
}

orders("water",5);