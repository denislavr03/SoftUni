function countStrOccur(sentence, word) {
    let count = 0;
    let words = sentence.split(' ');
    for (const key of words) {
        if (key === word) count++;
    }
    console.log(count);
}

countStrOccur('This is a word and it also is a sentence',
    'is');