function CommonEl(arr,brr)
{
    if(arr.length>=brr.length)
    {
        for (let index = 0; index < arr.length; index++) {
            for (let j = 0; j < brr.length; j++) {
                if(arr[index] === brr[j])
                {
                    console.log(arr[index]);
                }
            }
        }
    }
    else
    {
        for (let index = 0; index < brr.length; index++) {
            for (let j = 0; j < array.length; j++) {
                if(brr[index] === arr[j])
                {
                    console.log(brr[index]);
                }
            }
        }
    }
}

CommonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);