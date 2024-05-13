function matchFullName(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let temp = pattern.exec(text);
    let result = [];
    while (temp) {
        result.push(temp[0]);
        temp = pattern.exec(text);
    }
    console.log(result.join(' '));
}

matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');