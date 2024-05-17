function validityChecker(...params){
    params.push(0,0);

    if(Number.isInteger(Math.sqrt(Math.pow((params[4]-params[0]),2) + Math.pow((params[5]-params[1]),2)))){
        console.log(`{${params[0]}, ${params[1]}} to {${params[4]}, ${params[5]}} is valid`);
    }
    else console.log(`{${params[0]}, ${params[1]}} to {${params[4]}, ${params[5]}} is invalid`);

    if(Number.isInteger(Math.sqrt(Math.pow((params[4]-params[2]),2) + Math.pow((params[5]-params[3]),2)))){
        console.log(`{${params[2]}, ${params[3]}} to {${params[4]}, ${params[5]}} is valid`);
    }
    else console.log(`{${params[2]}, ${params[3]}} to {${params[4]}, ${params[5]}} is invalid`);

    if(Number.isInteger(Math.sqrt(Math.pow((params[2]-params[0]),2) + Math.pow((params[3]-params[1]),2)))){
        console.log(`{${params[0]}, ${params[1]}} to {${params[2]}, ${params[3]}} is valid`);
    }
    else console.log(`{${params[0]}, ${params[1]}} to {${params[2]}, ${params[3]}} is invalid`);
}

validityChecker(2,1,1,1);