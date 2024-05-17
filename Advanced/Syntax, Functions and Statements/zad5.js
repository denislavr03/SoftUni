function mathOp(n1, n2, op) {
    let result = 0;
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        case '%':
            result = n1 % n2;
            break;
        case '**':
            result = n1 ** n2;
            break;
        default:
            break;
    }
    console.log(result);
}