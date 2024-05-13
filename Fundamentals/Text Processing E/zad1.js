function revealWords(words, sentence) {
    let arrWords = words.split(', ');
    for (const iterator of arrWords) {
        let starWords = '*'.repeat(iterator.length);
        sentence = sentence.replace(starWords, iterator);
    }
    console.log(sentence);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');