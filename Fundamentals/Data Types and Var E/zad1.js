function SumDigits(num)
{
    num = num.toString();
    let sum = 0;
    for (let index = 0; index < num.length; index++) {
        sum += Number(num[index]);
    }
    console.log(sum);
}

SumDigits(245678);