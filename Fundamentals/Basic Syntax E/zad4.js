function Vacation(people,type,day)
{
    let price=0,total=0;
    switch(type)
    {
        case 'Students':
            if(day == "Friday") 
            {price = people * 8.45;}
            else if(day == "Saturday")
            {price = people * 9.8;}
            else if(day == "Sunday")
            {price = people * 10.46;}
            if(people>=30) total = price - price*0.15;
            else total = price;
            break;
            case 'Business':
                if(people>=100) people -= 10;
                if(day == "Friday") 
                {price = people * 10.9;}
                else if(day == "Saturday")
                {price = people * 15.6;}
                else if(day == "Sunday")
                {price = people * 16;}
                total = price;
                break;
            case 'Regular':
                if(day == "Friday") 
                {price = people * 15;}
                else if(day == "Saturday")
                {price = people * 20;}
                else if(day == "Sunday")
                {price = people * 22.5;}
                if(people>=10&&people<=20) total = price - 0.05*price;
                else total = price;
                break;
            default: console.log("Error!");
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`);
}

Vacation(30,'Students','Sunday');