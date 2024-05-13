function SumOfOdd(num)
{
    let temp=1
    let sum = 0;
    for (let index = 1; index <= num; index++) {

        console.log(temp);
        sum+=temp;
        temp+=2
    }
    console.log(`Sum: ${sum}`);
}

SumOfOdd(["3"])