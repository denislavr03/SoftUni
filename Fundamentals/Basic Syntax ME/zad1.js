function SortNum(n1,n2,n3)
{
    const arr = ([n1,n2,n3].sort()).reverse();

    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}

SortNum(2,1,3);