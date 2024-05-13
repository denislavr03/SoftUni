function distinctArr(arr) {
    let brr = [];
    for (const iterator of arr) {
        if (!brr.includes(iterator)) brr.push(iterator);
    }
    console.log(brr.join(' '));
}

distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);