function Calculator(n1,op,n2)
{
    switch (op) {
        case '+':
            console.log((n1+n2).toFixed(2));
            break;
        case '-':
            console.log((n1-n2).toFixed(2));
            break;
        case '/':
            console.log((n1/n2).toFixed(2));
            break;
        case '*':
            console.log((n1*n2).toFixed(2));
            break;
        default: console.log("Error!");
            break;
    }
}

Calculator(5,'+',10);