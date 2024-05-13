function modernHashTag(text) {
    let arr = text.split(' ');
    let brr = [];
    for (const iterator of arr) {
        if (iterator[0] === '#' && iterator.length > 1) {
            brr = iterator.split('');
            brr.shift();

            let wordsToPrint = '';
            for (const char of brr) {
                if (!isNaN(char)) {
                    wordsToPrint = '';
                    break;
                } else {
                    wordsToPrint += char;
                }
            }
            if(wordsToPrint.length > 0){
                console.log(wordsToPrint);
            }
        }
    }
}

modernHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');