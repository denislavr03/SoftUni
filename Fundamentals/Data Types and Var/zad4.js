function IntOrFloat(n1,n2,n3)
{
    let sum = n1+n2+n3;
    let type = sum%1===0 ? "Integer" : "Float";
    console.log(`${sum} - ${type}`);
}

IntOrFloat(9,100,1);