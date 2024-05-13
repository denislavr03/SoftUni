function numMod(num) {
    let arr = num.toString().split('');
    let sum = 0, avg = 0,count = 1;
        for (let index = 0; index < arr.length; index++) {
            sum += Number(arr[index]);
            avg = sum / count; 
            if(avg < 5) arr.push('9');
            count++;
            console.log(`sum ${sum}`);
            console.log(`avg ${avg}`);
            console.log(arr.join(''));
        }
        //if(avg >= 5) console.log(arr.join(''));
}

numMod(5835);