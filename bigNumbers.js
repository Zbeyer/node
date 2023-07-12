let MAX_VALUE = 10009;

units = function ()
{
    return [
        "",
        "thousand",
        "million",
        "billion",
        "trillion",
        "quadrillion",
        "quintillion",
        "sextillion",
        "septillion",
        "octillion",
        "decillion",
        "undecillion",
        "duodecillion",
        "tredecillion",
        "quattuordecillion"
    ];
}
let UNITS = units();

print = function (printValue)
{
    console.log("Printing Object Notation\n%o", printValue);
    // console.log("Printing Value\n" + printValue);
    return printValue;
}

indexValue = function (number)
{
    number = parseFloat(number) || 0.0;
    let maxVal = MAX_VALUE;

    index = number / maxVal;

    return parseInt(index);
}

bigNumber = function (number, index)
{
    if (number <= 0) number = 0;
    if (index <= 0) index = 0;

    let str = "" + number;
    if (index)
    {
        str = str  + " " + UNITS[index];
    }
    return str;
}


for (let i = 0; i < UNITS.length; i++)
{
    let bn = bigNumber(133.7, i);
    print(bn.toUpperCase());
}
