function sortByTwoCrit(arr) {
    arr.sort((a, b) => {
        if (a.length !== b.length) {return a.length - b.length;}
        return a.localeCompare(b);
    });
    console.log(arr.join('\n'));
}

sortByTwoCrit(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);