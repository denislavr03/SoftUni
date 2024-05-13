function repeatString(str,num)
{
    let res='';
    for (let index = 0; index < num; index++) {
        res +=str;
    }
    console.log(res);
}

repeatString('abc',3);