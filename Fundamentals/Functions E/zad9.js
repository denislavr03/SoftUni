function loadingBar(num) {
    if (num % 10 != 0) return;
    let count = num / 10;
    let bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
    for (let index = 0; index < count; index++) {
        bar[index] = bar[index].replace('.', '%');
    }
    if (num != 100) {
        console.log(`${num}% [${bar.join('')}]`);
        console.log("Still loading...");
    }
    else {
        console.log("100% complete");
        console.log(`[${bar.join('')}]`);
    }
}

loadingBar(30);