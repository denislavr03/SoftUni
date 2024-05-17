function wordsUppercase(str) {
    let pattern = /[a-zA-Z]+/gm;
    let temp = pattern.exec(str);
    let arr = [];
    while (temp) {
        arr.push(temp[0]);
        temp = pattern.exec(str);
    }
    let brr = [];
    for (const iterator of arr) {
        brr.push(iterator.toUpperCase());
    }
    console.log(brr.join(', '));
}

wordsUppercase('hi, how are you?');