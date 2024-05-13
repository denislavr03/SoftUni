function oddOccurences(str) {
    let arr = str.toLowerCase().split(' ');
    let obj = {};
    for (const word of arr) {
        if (!obj.hasOwnProperty(word)) {
            obj[word] = 0;
        }
        obj[word]++;
    }

    let brr = Object.entries(obj)
        .filter(double => double[1] % 2 == 1)
        .sort((a,b) => b[1]-a[1]);
    let result = '';
    for (const array of brr) {
        result += `${array[0]} `;
    }
    console.log(result);
}

oddOccurences('Java C# Php PHP java PhP 3 C# 3 1 5 C#');