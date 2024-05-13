function factDiv(a, b) {
    let aSum = 1, bSum = 1;
    for (let index = 1; index <= a; index++) {
        aSum *= index;
    }
    for (let index = 1; index <= b; index++) {
        bSum *= index;
    }
    console.log((aSum/bSum).toFixed(2));
}

factDiv(6,2);