function NextDay(year,month,day)
{
    let tomorrow = new Date(year,month-1,day+1);

    let y = tomorrow.getFullYear();
    let m = tomorrow.getMonth();
    let d = tomorrow.getDate();

    console.log(`${y}-${m+1}-${d}`);
}

NextDay(2020,3,24);