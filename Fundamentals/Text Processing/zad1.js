function printChar(word) {
    for (const key in word) {
        console.log(word[key]);
    }
}

printChar('AWord');