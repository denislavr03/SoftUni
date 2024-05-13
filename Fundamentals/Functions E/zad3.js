function acsii(a, b) {
    let start = Math.min(a.charCodeAt(), b.charCodeAt());
    let end = Math.max(a.charCodeAt(), b.charCodeAt());
    let arr = [], temp;
    for (let index = start+1; index < end; index++) {
        temp = String.fromCharCode(index);
        arr.push(temp);
    }

    console.log(arr.join(' '));
}

acsii('C', '#');