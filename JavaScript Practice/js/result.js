var result = prompt("Enter your number: ");


if(result >=90)
    {
        console.log("you got A+!");
    }
else if(result >=85 && result <= 89)
    {
        console.log("you got A")
    }
else if(result >=80 && result <= 84)
    {
        console.log("you got B+")
    }
else if(result >=75 && result <= 79)
    {
        console.log("you got B")
    }
else if(result >0 && result <= 74)
    {
        console.log("failed")
    }
else
    {
        console.log("invalid")
    }