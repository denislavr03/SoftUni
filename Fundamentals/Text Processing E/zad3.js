function extractFile(directory) {
    let arr = directory.split('\\');
    let file = arr[arr.length - 1];
    let count = 0;
    let name, ex;
    for (const iterator of file) {
        if (iterator.includes('.')) count++;
    } if (count === 1) {
        [name, ex] = file.split('.');
        console.log(`File name: ${name}`);
        console.log(`File extension: ${ex}`);
    } else {
        name = file.slice(0, file.lastIndexOf('.'));
        ex = file.slice(file.lastIndexOf('.') + 1);
        console.log(`File name: ${name}`);
        console.log(`File extension: ${ex}`);
    }
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');