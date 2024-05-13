function sumOfOdd(num) {
    let digit = String(num).split('');
    let eSum = 0,oSum=0;
        for (let index = 0; index < digit.length; index++) {
            if(Number(digit[index])%2==0) eSum+= Number(digit[index]);
            else oSum += Number(digit[index]);
        }
        console.log(`Odd sum = ${oSum}, Even sum = ${eSum}`);
}

sumOfOdd(1000435);