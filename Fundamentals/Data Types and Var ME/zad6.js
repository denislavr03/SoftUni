function TriArea(a,b,c)
{
    let s = (1/2)*(a+b+c);
    console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
}

TriArea(2,3.5,4);