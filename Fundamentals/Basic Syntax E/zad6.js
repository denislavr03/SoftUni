function SumMtoN(m,n)
{
    let sum=0;
    let temp = '';
    for (let index = m; index <= n; index++) {
        sum+=index;
        temp += `${index} `;
    }        
    console.log(temp);
    console.log(`SUM: ${sum}`);
}

SumMtoN(1,26);
