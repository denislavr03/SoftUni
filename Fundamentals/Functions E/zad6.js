function PassValidator(pass) {

    let temp = pass.split('')
    let digitCount = 0, othersCount = 0;
    for (let index = 0; index < pass.length; index++) {
        if (temp[index].charCodeAt() > 47 && temp[index].charCodeAt() < 58) {
            digitCount++;
        }
        if (!(temp[index].charCodeAt() > 64 && temp[index].charCodeAt() < 91 || temp[index].charCodeAt() > 96 && temp[index].charCodeAt() < 123 || temp[index].charCodeAt() > 47 && temp[index].charCodeAt() < 58)) {
            othersCount++;
        }
    }
    if (pass.length < 6 || pass.length > 10) console.log("Password must be between 6 and 10 characters");
    if (othersCount != 0) console.log("Password must consist only of letters and digits");
    if (digitCount < 2) console.log("Password must have at least 2 digits");
    if ((pass.length >= 6 || pass.length <= 10) && digitCount > 2 && othersCount == 0) console.log("Password is valid");
}



PassValidator('Pa%s%s');