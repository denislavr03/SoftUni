function ReqReading(pnum,hread,dnum)
{
    let hourDay = (pnum / hread) / dnum;
    console.log(hourDay);
}

ReqReading(212,20,2);