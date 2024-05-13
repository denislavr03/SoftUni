function negativeoPositiveNum(arr) {
    brr = [];
    brr.push(arr.filter(el => el < 0)
        .reverse()
        .join('\n'));
    brr.push(arr.filter(el => el >= 0).join('\n'));
    console.log(brr.join('\n'));
}

negativeoPositiveNum(['3', '-2', '0', '-1']);