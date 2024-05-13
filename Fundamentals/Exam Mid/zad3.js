function chatLogger(arr) {
    let log = [];
    for (let index = 0; index < arr.length; index++) {
        let op = arr[index].split(' ');
        switch (op[0]) {
            case 'Chat':
                log.push(op[1]);
                break;
            case 'Delete':
                for (let j = 0; j < log.length; j++) {
                    if (log[j] === op[1]) {
                        log.splice(j, 1);
                    }
                }
                break;
            case 'Edit':
                for (let j = 0; j < log.length; j++) {
                    if (log[j] === op[1]) {
                        log[j] = op[2];
                    }
                }
                break;
            case 'Pin':
                for (let j = 0; j < log.length; j++) {
                    if (log[j] === op[1]) {
                        let temp = log.splice(j, 1);
                        log.push(temp);
                    }
                }
                break;
            case 'Spam':
                for (let j = 1; j < op.length; j++) {
                    log.push(op[j]);
                }
                break;
            case 'end':
                break;
        }
    }
    console.log(log.join('\n'));
}

chatLogger(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"]);