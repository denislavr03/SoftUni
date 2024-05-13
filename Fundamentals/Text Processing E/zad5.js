function replaceRepChar(input) {
    let char = input.split('');
    let newStr = '';
    for (let index = 0; index < char.length; index++) {
        if (char[index] != char[index + 1]) {
            newStr += char[index];
        }
    }
    console.log(newStr);
}

replaceRepChar('qqqwerqwecccwd');