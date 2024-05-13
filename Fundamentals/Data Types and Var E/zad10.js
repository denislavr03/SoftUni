function SpiceMine(num)
{
    let yield;
    let sum = 0,days = 0;
    while (num >= 100) {
        yield = num-26;
        num -= 10;
        sum += yield;
        days++;
    }
    sum -=26
    console.log(days);
    console.log(sum);
}

SpiceMine(450);