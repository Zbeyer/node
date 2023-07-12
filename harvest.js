let MAX_VALUE = 999.990;

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
    return printValue;
}

shrinkNumber = function (number)
{
    while (number >1_000)
    {
        number = number / 1_000;
    }
    return number;
}

indexValue = function (number)
{
    number = parseFloat(number) || 0.0;
    let maxVal = MAX_VALUE;
    let digits = number.toString().length;
    index = parseInt(digits / 3);

    return index;
}

bigNumber = function (number, index)
{
    number = number || 0.0
    if (number < 0) number = 0.0;
    if (index < 0) index = 0;

    number = parseFloat(number);
    let str = "" + number.toFixed(2);
    if (index > 0)
    {
        str = str  + " " + UNITS[index];
    }
    return str;
}

seed = function (max)
{
    max = max || 900;
    return Math.floor(Math.random() * max);
}

harvest = function (number)
{
    number = number || 0.0;
    number = number + seed();
    
    return number;
}

let number = 0;
let index   = 0;
let iv      = indexValue(number);

for (let i = 0; i < 10; i++)
{
    number = harvest(number);
    console.info("number: %o", number);

    iv          = indexValue(number);
    index       = Math.max(iv, index);
    number = shrinkNumber(number);

    let bn = bigNumber(number, index);

    print(bn);
}