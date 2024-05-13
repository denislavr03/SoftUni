function pascalCaseSplitter(str){
    let char = str.split('');
    let arr = [];
    for (let index = 0; index < char.length; index++) {
        if(char[index] === char[index].toUpperCase()){
            arr = str.split(' ');
        }
    }
    console.log(arr);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');