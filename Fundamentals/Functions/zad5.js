function simpleCalc(oNum,tNum,op)
{
    let add = (a,b) => a+b;
    let sub = (a,b) => a-b;
    let mult = (a,b) => a*b;
    let div = (a,b) => a/b;
    let sum=0;
    switch(op)
    {
        case "add": console.log(`${sum = add(oNum,tNum)}`); break;
        case "subtract": console.log(`${sum = sub(oNum,tNum)}`); break;
        case "multiply": console.log(`${sum = mult(oNum,tNum)}`); break;
        case "divide": console.log(`${sum = div(oNum,tNum)}`); break;
    }
}

simpleCalc(5,5,"multiply");