function SpecialNum(n)
{
    let temp;
    let sum=0,res=0;
    for (let index = 1; index <= n; index++) {
        temp = index.toString();
        for(let j = 0; j < temp.length; j++)
        {
            sum += Number(temp[j]);     
        }
        res = sum.toString().includes('5') || sum.toString().includes('7') || sum.toString().includes('11') ? "True" : "False";
        console.log(`${index} -> ${res}`);
        sum = 0;
    }
}

SpecialNum(60);