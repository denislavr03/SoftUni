function mathPower(num,pow)
{
    let sum=1;
    for (let index = 0; index < pow; index++) {
        sum*= num;
    }
    console.log(sum);
}

mathPower(2,8);