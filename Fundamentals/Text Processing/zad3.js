function censoredWords(sentence, word) {
    let result;
    while (sentence.includes(word)) {
        let start = sentence.indexOf(word);
        let end = start + word.length;
        result = sentence.substring(0, start);
        result += "*".repeat(word.length);
        result += sentence.substring(end);
        sentence = result;
    }
    console.log(sentence);

}

censoredWords('A small sentence with some words',
    'small');