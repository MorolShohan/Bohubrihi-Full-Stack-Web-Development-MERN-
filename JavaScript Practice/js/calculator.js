console.log("select and option\n1. ADD\n2. Subtract\n3. Multiply\n4. Divide")
var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
var option = prompt("Choose an operation: ");
var result = null;
num1 = parseInt(num1);
num2 = parseInt(num2);

if(option == 1)
    {
        console.log(result = num1 + num2);
    }
else if(option == 2)
    {
        console.log(result = num1 - num2);
    }
else if(option == 3)
    {
        console.log(result = num1 * num2);
    }
else if(option == 4)
    {
        console.log(result = num1 / num2);
    }
else
    {
        console.log("invalid option")
    }

