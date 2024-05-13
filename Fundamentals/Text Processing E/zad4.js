function strSubstr(word, sentence) {
    let arr = sentence.split(' ');
    let isNotFound = true;
    for (const iterator of arr) {
        if (iterator.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            isNotFound = false;
            break;
        }
    }
    if(isNotFound){
        console.log(`${word} not found!`);
    }
}

strSubstr('python',
    'JavaScript is the best programming language');