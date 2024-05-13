function DayOfWeek(num)
{
    let week = [undefined,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let day;
    for (let index = 0; index <= week.length-1; index++) {
        if(num == index) day = week[index];
    }
    if(num>0 && num <week.length) console.log(day);
    else console.log("Invalid day!");
}

DayOfWeek(7);