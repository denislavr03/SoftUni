function AmazingNum(num)
{
    num = num.toString();
    let sum=0;
    for (let index = 0; index < num.length; index++) {
        sum += Number(num[index]);
    }

    let res = sum.toString().includes('9') ? console.log(`${num} Amazing? True`) : console.log(`${num} Amazing? False`);
}

AmazingNum(1233);