function matchDates(text) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})(\2)(?<year>\d{4})\b/g;
    let temp = pattern.exec(text);
    while (temp) {
        let day = temp.groups['day'];
        let month = temp.groups['month'];
        let year = temp.groups['year'];
        temp = pattern.exec(text);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);