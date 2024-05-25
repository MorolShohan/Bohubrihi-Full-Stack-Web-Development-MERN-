console.log("select and optionm : \na. option 1 \nb. Option 2\nc. Option 3 ");

choice = prompt();

var text;
switch(choice)
{
    case "a" :
        text = "option 1 selected!"
        break;
    case "b" :
        text = "option 2 selected!"
        break;
    case "c" :
        text = "option 3 selected!"
        break;
        default:
            text = "no option is selected"
}

console.log(text);

