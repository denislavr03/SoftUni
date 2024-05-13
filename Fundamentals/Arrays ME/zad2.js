function addNRemove(arr)
{
    let brr = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === 'add')
        {
            brr.push(index+1);
        }
        else if(arr[index] === 'remove')
        {
            brr.pop();
        }
    }
    if(brr.length == 0) console.log("Empty");
    else console.log(brr.join(' '));
}

addNRemove(['add', 'add','remove', 'add', 'add']);