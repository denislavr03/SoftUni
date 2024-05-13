function CentToMins(century)
{
    console.log(`${century} centuries = ${century*100} years = ${Math.trunc((century * 100)*365.2422)} days = ${Math.trunc((century*100)*365.2422)*24} hours = ${Math.trunc((century*100)*365.2422)*24*60} minutes`);
}

CentToMins(1);