function theImitationGame(arr) {
    let message = arr.shift();
    let command = "";
    let output = message;
    for (const iterator of arr) {
        if (iterator === 'Decode') {
            break;
        }
        else {
            command = iterator.split('|');
            switch (command[0]) {
                case 'ChangeAll':
                    while (output.includes(command[1])) {
                        output = output.replace(command[1], command[2]);
                    }
                    break;
                case 'Insert':
                    output = output.slice(0, command[1]) + command[2] + output.slice(command[1]);
                    break;
                case 'Move':
                    let temp = output.substring(0, command[1]);
                    output = output.replace(temp, "");
                    output = output + temp;
                    break;
                default:
                    break;
            }
        }
    }
    console.log(`The decrypted message is: ${output}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);