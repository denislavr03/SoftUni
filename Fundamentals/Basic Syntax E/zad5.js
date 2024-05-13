function LeapYear(year)
{
    if(year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) console.log("Leap");
    else console.log("Not");
}

LeapYear(["2020"]);