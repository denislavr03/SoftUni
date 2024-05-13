function LogIn(input)
{
    let user = input[0];
    let temp = 1;
    let revUser = "";
    for (let index = user.length-1; index >= 0; index--) {
        revUser += user[index];
    }
    let pass = input[temp];
    while(1)
    {
        if(pass != revUser)
        {
            temp++;
            pass = input[temp];
            console.log("Incorrect password. Try again.");   
         if(temp>4) {console.log(`User ${user} blocked!`); break;}
        }
        else {console.log(`User ${user} logged in.`); break;}
    }
}

LogIn(['sunny','rainy','cloudy','sunny','not sunny']);