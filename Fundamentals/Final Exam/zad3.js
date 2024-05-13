function messagesManager(commands) {
    let capacity = Number(commands.shift());
    let map = new Map();
    let count = 0;
    for (const iterator of commands) {
        if (iterator === "Statistics") {
            break;
        }
        let cmd = iterator.split('=');
        switch (cmd[0]) {
            case 'Add':
                if (!map.has(cmd[1])) {
                    map.set(cmd[1], { s: cmd[2], r: cmd[3] });
                }
                break;
            case 'Message':
                if (map.has(cmd[1]) && map.has(cmd[2])) {
                    let sender = map.get(cmd[1]);
                    let receiver = map.get(cmd[2]);
                    sender.s = Number(sender.s) + 1;
                    receiver.r = Number(receiver.r) + 1;

                    if (Number(sender.s) + Number(sender.r) >= capacity) {
                        console.log(`${cmd[1]} reached the capacity!`);
                        map.delete(cmd[1]);
                    }
                    if (Number(receiver.s) + Number(receiver.r) >= capacity) {
                        console.log(`${cmd[2]} reached the capacity!`);
                        map.delete(cmd[2]);
                    }
                }
                break;
            case "Empty":
                if (cmd[1] === "All") {
                    map.clear();
                } else if (map.has(cmd[1])) {
                    map.delete(cmd[1]);
                }
                break;
            default:
                break;
        }
        count = map.size;
    }
    console.log(`Users count: ${count}`);
    for (const iterator of map) {

        console.log(`${iterator[0]} - ${Number(iterator[1].s) + Number(iterator[1].r)}`);
    }
}

messagesManager(["20",
    "Add=Mark=3=9",
    "Add=Berry=5=5",
    "Add=Clark=4=0",
    "Empty=Berry",
    "Add=Blake=9=3",
    "Add=Michael=3=9",
    "Add=Amy=9=9",
    "Message=Blake=Amy",
    "Message=Michael=Amy",
    "Statistics"]);