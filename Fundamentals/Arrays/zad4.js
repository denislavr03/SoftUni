function ReverseInPlace(arr)
{
    for (let index = 0; index < arr.length/2; index++) {
        let fEl = arr[index];
        let lEl = arr[arr.length-1-index];
        arr[index] = lEl;
        arr[arr.length-1-index] = fEl;
    }

    console.log(arr.join(" "));
}

ReverseInPlace(["a","b","c","d","e"]);