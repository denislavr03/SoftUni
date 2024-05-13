function towns(arr) {
    let obj = {};

    for (let index = 0; index < arr.length; index++) {
        let towns = arr[index].split(' | ');
        obj = {
            town: towns[0],
            latitude: Number(towns[1]).toFixed(2),
            longitude: Number(towns[2]).toFixed(2)
        };

        console.log(obj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);