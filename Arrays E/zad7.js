function MaxSeqEl(arr) {
    let seq = 1, maxSeq = 0, num = 0;

    for (let index = 0; index < arr.length; index++) {

        if (index !== 0) {
            let curNum = arr[index];
            let prevNum = arr[index - 1];

            if (curNum == prevNum) {
                seq++;
                if (seq > maxSeq) {
                    maxSeq = seq;
                    num = curNum;
                }
            } else {seq =1;}
        }
    }

    console.log(`${(num+' ').repeat(maxSeq)}`);
}

MaxSeqEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);