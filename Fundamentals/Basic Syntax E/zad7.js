function NumTri(num)
{
    let nxll = '';
    for (let index = 1; index <= num; index++) {
        for (let j = 1; j <= index; j++) {
            nxll += `${index} `;
        }
        nxll+=`\n`;
    }
    console.log(nxll);
}

NumTri(6);