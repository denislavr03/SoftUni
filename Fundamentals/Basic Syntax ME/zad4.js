function ReverseString(str)
{
    let revStr = "";
    for (let index = str.length-1; index >= 0; index--) {
        revStr += str[index];
    }
    console.log(revStr);
}

ReverseString('hello');