function GladExp(lostF,Hprice,SPrice,ShPrice,APrice)
{
    let HBroke = Math.floor(lostF / 2);
    let SBroke = Math.floor(lostF / 3);
    let ShBroke = Math.floor(lostF / 6);
    let ABroke = Math.floor(lostF/12);
    
    let total = Hprice*HBroke+SPrice*SBroke+ShPrice*ShBroke+APrice*ABroke;

    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

GladExp(23,12.5,21.5,40,200);