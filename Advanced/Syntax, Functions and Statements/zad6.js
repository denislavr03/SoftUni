function sumInRange(n1,n2){
    let sum = 0;

    for (let index = Number(n1); index <= Number(n2); index++) {
        sum += index;
    }
    console.log(sum);
}

sumInRange('1','5');