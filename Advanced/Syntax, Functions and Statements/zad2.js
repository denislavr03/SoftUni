function strLen(...str){
    let sum = str.reduce((acc,a) => acc + a.length,0);
    let avg = sum/str.length;
    console.log(sum);
    console.log(Math.floor(avg));
}

strLen('chocolate', 'ice cream', 'cake');