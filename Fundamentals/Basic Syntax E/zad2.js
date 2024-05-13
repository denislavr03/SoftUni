function Round(num,prec)
{
    if(prec > 15) prec = 15;
    let temp = parseFloat(parseFloat(num).toFixed(prec));
    console.log(temp);
}

Round(10.53,3);