function numbers(arr) {
    let nums = arr.shift().split(' ');
    let temp = 0, asd = 0;
    for (let index = 0; index < arr.length; index++) {
        let op = arr[index].split(' ');
        switch (op[0]) {
            case 'Add':
                nums.push(op[1]);
                break;
            case 'Remove':
                for (let j = 0; j < nums.length; j++) {
                    if (asd === 1) continue;
                    if (nums[j] === op[1]) {
                        nums.splice(j, 1);
                        asd++;
                    }
                }
                break;
            case "Replace":
                for (let j = 0; j < nums.length; j++) {
                    if (temp === 1) continue;
                    if (nums[j] === op[1]) {
                        nums[j] = op[2];
                        temp++;
                    }
                }
                break;
            case "Collapse":
                for (let j = 0; j < nums.length; j++) {
                    nums = nums.map(Number);
                    if (nums[j] < Number(op[1])) {
                        nums.splice(j, 1);
                    }
                }
                break;
            case "Finish":
                break;
        }
    }
    console.log(nums.join(' '));
}


numbers(["1 20 -1 10", "Collapse 8", "Finish"]);