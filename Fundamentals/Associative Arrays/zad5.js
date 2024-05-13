function schoolGrades(arr) {
    let map = new Map();
    let sum = 0;
    let count=0;
    for (let key of arr) {
        let grade = key.split(' ');
        let name = grade.shift();
        for (let index = 0; index < grade.length; index++) {
            sum += Number(grade[index]);
            count++;
            if (!map.has(name)) {
                sum;
            }
            else{
                let currGrade = map.get(name);
                sum = currGrade += Number(grade[index]);
            }
        }

        map.set(name, sum/count);

        //let avg = (sum/grade.length).toFixed(2);
        //obj[name] = avg;
        //sum = 0;
    }

    console.log(map);
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);