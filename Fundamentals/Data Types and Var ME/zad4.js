function BiggestOf3Num(n1,n2,n3)
{
    let max;
    if(n1>n2 && n1>n3) max = n1;
    else if(n2>n1 && n2>n3) max = n2;
    else max = n3;

    console.log(max);
}

BiggestOf3Num(-2,3,7);