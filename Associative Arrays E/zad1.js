function wordsTracker(arr) {
    let [word1,word2] = arr.shift().split(' ');
    let w1c=0,w2c=0;
    let obj = {};
    for (let key in arr) {
        if(arr[key] === word1) w1c++;
        else if(arr[key] === word2) w2c++;
        obj[word1] = w1c;
        obj[word2] = w2c;
    }
    let brr = Object.entries(obj).sort(function (a, b) { return b[1] - a[1] });
    for (let key of brr) {
        console.log(`${key[0]} - ${key[1]}`);
    }
}

//pravilno reshenie
//function wordsTracker(array) {
//    let wantedWords = array.shift().split(' ');
//    let wantedWordsCounts = {};
//    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
//    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
//    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
//    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
//}

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);