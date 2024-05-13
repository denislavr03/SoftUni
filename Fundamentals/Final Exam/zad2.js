function messageTanslator(input) {
    let count = input.shift();
    let tempCount = 0;
    let pattern = /(!)[A-Z][a-z]+(\1):[[A-Za-z]+]/gm;
    let newCommand = "", newText = "";
    let asciiArr = [];

    if (tempCount > count) {
        return;
    } else {
        for (const iterator of input) {
            if (pattern.test(iterator) === false) {
                console.log("The message is invalid");
                tempCount++;
            }
            else {
                let [command, text] = iterator.split('[');
                newCommand = command.slice(1, command.length - 2);
                newText = text.slice(0, text.length - 1);
                let charArr = newText.split("");
                for (const iterator of charArr) {
                    let ascii = iterator.charCodeAt(0);
                    asciiArr.push(ascii);
                }
                console.log(`${newCommand}: ${asciiArr.join(" ")}`);
                tempCount++;
            }
        }
    }
}

messageTanslator((["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"]));