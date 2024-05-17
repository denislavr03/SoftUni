function timeToWalk(steps,meters,khSpeed){
    let msSpeed = khSpeed/3.6;
    let rest = Math.floor(steps / 500);

    console.log(4000/(meters*msSpeed));

}

timeToWalk(4000,0.60,5);