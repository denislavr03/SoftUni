function printNthEl(arr) {
    let brr = [];
    for (let index = 0; index < arr.length-1; index += Number(arr[arr.length - 1])) {
        brr.push(arr[index]);
    }
    console.log(brr.join(' '));
}

printNthEl(['dsa', 'asd', 'test', 'test', '2']);