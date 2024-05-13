function passwordValidator(input) {
    let password = input.shift();
    let output = password;
    for (const iterator of input) {
        let commands = iterator.split(' ');
        if (commands === "Complete") {
            break;
        }
        switch (commands[0]) {
            case "Insert":
                output = output.slice(0, commands[1]) + commands[2] + output.slice(commands[1]);
                console.log(output);
                break;
            case "Replace":
                let location = output.indexOf(commands[1]);
                let symbol = output.charCodeAt(location);
                let sum = symbol + Number(commands[2]);
                let letter = String.fromCharCode(sum);
                while (output.includes(commands[1])) {
                    output = output.replace(commands[1], letter);
                }
                console.log(output);
                break;
            case "Make":
                if (commands[1] === "Lower") {
                    let letter = output.charCodeAt(commands[2]);
                    letter = String.fromCharCode(letter);
                    let lower = letter.toLowerCase();
                    output = output.replace(letter, lower);
                    console.log(output);
                }
                if (commands[1] === "Upper") {
                    let letter = output.charCodeAt(commands[2]);
                    letter = String.fromCharCode(letter);
                    let lower = letter.toUpperCase();
                    output = output.replace(letter, lower);
                    console.log(output);
                }
                break;
            case "Validation":
                if (output.length < 8) {
                    console.log("Password must be at least 8 characters long!");
                }
                if (/^[A-Za-z0-9_]*$/.test(output) == false) {
                    console.log("Password must consist only of letters, digits and _!");
                }
                if (/[A-Z]/.test(output) === false) {
                    console.log("Password must consist at least one uppercase letter!");
                }
                if (/[a-z]/.test(output) === false) {
                    console.log("Password must consist at least one lowercase letter!");
                }
                if (/[0-9]/.test(output) === false) {
                    console.log("Password must consist at least one digit!");
                }
                break;
            default:
                break;
        }
    }
}

passwordValidator(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'])