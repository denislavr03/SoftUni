function matchPhoneNum(text) {
    let pattern = /\+359([ -])2(\1)\d{3}(\1)\d{4}\b/g;
    let result = [];
    let temp = pattern.exec(text);
    while (temp) {
        result.push(temp[0]);
        temp = pattern.exec(text);
    }

    console.log(result.join(', '));
}

matchPhoneNum(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);