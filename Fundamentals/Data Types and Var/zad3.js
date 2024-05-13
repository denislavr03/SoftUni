function RightPlace(str,ch,word)
{
    let res = str.replace('_',ch);
    let output = res==word ? "Matched" : "Not Matched";
    console.log(output);
}

RightPlace('Str_ng','i','String');