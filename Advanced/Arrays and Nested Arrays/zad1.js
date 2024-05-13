function evenPosition(arr) {
    let brr = [];
    arr.map(a => {if(arr.indexOf(a)%2 == 0) brr.push(a)});
    console.log(brr.join(" "));
}

evenPosition(['20', '30', '40', '50', '60'] );