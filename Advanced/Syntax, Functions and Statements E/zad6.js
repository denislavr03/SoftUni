function roadRadar(currSpeed, location){
    let locEnum = {
        'motorway' : 130,
        'interstate' : 90,
        'city' : 50,
        'residential' : 20
    };

    let loc = locEnum[location];
    let diff = currSpeed - loc;
    if (currSpeed <= loc) {
       console.log(`Driving ${currSpeed} km/h in a ${loc} zone`);
    }
    else if(diff <= 20){
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${loc} - speeding`);
    }
    else if(diff <= 40){
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${loc} - excessive speeding`);
    }
    else console.log(`The speed is ${diff} km/h faster than the allowed speed of ${loc} - reckless driving`);
}

roadRadar(90, 'motorway');