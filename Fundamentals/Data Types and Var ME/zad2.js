function PrimeNum(num)
{
    let isPrime;
    for (let index = 2; index < num; index++) {
        if(num % index == 0) {isPrime = false; break;}
    }

    if(isPrime == false) console.log(isPrime)
    else console.log(!isPrime);

}

PrimeNum(81);