//////////////
// COMMENTS //
//////////////

// single line comments start with two forward slashs

/*
    while multiline comments start with a slash star
    and end with a star slash

    comments do not execute like normal code and serve
    to help you and others understand what the code does
*/

///////////////
// VARIABLES //
///////////////

// variable declarations can be broken up into 3 parts
// modifier : var, let, const
// name : can contain any alphanumeric character, dollar sign, or underscore, but it cannot start with a number
// value : the data to be stored in the variable
// [modifier] [name] = [value];

// with var
var a = "a"; // you can declare a variable
var a = "a"; // or redeclare a variable
a = "a"; // or set a variable

// with let
let b = "b"; // you can declare a variable
// let b = "b"; // but NOT redeclare a variable
b = "b"; // you can set a variable

// with const
const c = "c"; // you can declare a variable
// const c = "c"; // but NOT redeclare a variable
// c = "c"; // nor set a variable

////////////////
// DATA TYPES //
////////////////

// number
const integer = 0; // we can declare simple numbers
const float = 1.5; // floating point number
const scientific_notation = 52e3; // scientific notation
const number_with_underscores = 1_000_000; // or numbers with underscores
const bits = 0b1010; // binary is 1 bit per digit (0-1)
const octal = 0o52; // octal is 3 bits per digit (0-7)
const hex = 0x2a; // hex is 4 bits per digit (0-f)
const not_a_number = NaN; // usually the result of bad math

// strings usually represent text to or from a user
const string_with_quotes = "any character, escape with \" otherwise it closes."; // we can create strings with double quotes
const string_with_apostrophe = 'any character escape with \' otherwise it closes.'; // single quotes
const string_with_backtick = `any character, escape with \` otherwise it closes.`; // or backticks

// booleans help us determine yes/no values
const boolean_yes = true; // true is yes
const boolean_no = false; // false is no

// there are two values in Javascript that represent nothing
const thisIsNull = null; // is an explicit signal that means there is currenly nothing there, but there could
const thisIsUndefined = undefined; // is an implicit signal that means there is currently nothing there, and there never should

// arrays contain one or more item, usually of the same type or shape
const empty_array = []; // this is an array of 0 items
const array_of_strings = ["this", "is", "my", "name"]; // this is an array of 4 strings
const array_of_numbers = [1, 1, 2, 3, 5, 8, 1.3]; // this is an array of 7 numbers

// the values of an array can be accessed by their index
// arrays are 0 based meaning the first item is at index 0
const the_arrays_first_value = array_of_strings[0]; // this gets the first item in the array
array_of_strings[1] = "isn't"; // this sets the second item in the array
const index = 2; // we can also use a variable to access an item
array_of_strings[index] = "your"; // this sets the third item in the array

// objects allow you to define details about your data
const empty_object = {}; // this object has no details
const person = { // this object has many details about a person named Logan
    name : "Logan",
    age : 32, // their age is 32
    height : { // their height is 5 feet 8 inches
        feet : 5,
        inches : 8,
    },
    has_hair: true, // they have hair
    children: [], // they have no children
    languages: ["English", "Javascript"], // and they speak English and Javascript
};

// the values of an object can be accessed by their key
let personName = person.name; // here we get the person's name
personName = person["name"]; // we can even use a string...
const nameKey = "name"; // ...or a variable...
personName = person[nameKey]; // ...to access the name
person.name = "Liz"; // we can also update the value

// if we were afraid a value might not exist we can use optional chaining to prevent errors
person.foot?.toes.length

// finally you can use destructuring to get the values of an object
const { 
    name, 
    age, 
    dne = "default value", // you can even set default values for fields that might not exist
} = person;

//////////////////////
// TRUTHY VS FALSEY //
//////////////////////

// there are 6 values that are considered false-y in Javascript
const falsey_values = [
    false,
    0,
    "",
    null,
    undefined,
    NaN,
];

// all other values are considered truth-y
const truthy_values = [
    {},
    [],
    "string with content",
    true,
    1,
];

/////////////////////////
// ADVANCED DATA TYPES //
/////////////////////////

// You will rarely if ever use the following data types, but they are good to know about

// symbols define a location in an array 
const string_symbol = Symbol("index"); // 
const number_symbol = Symbol(1); //

const bigint_inline = 100n;
const bigint_constructor = BigInt(100);

/* 
    Literal - any value explicity written as code, eg:

    "This is a string literal"

    false // is a boolean literal

    { foo : "bar" } // is an object literal

*/

/////////////
// CONSOLE //
/////////////

console.log(person); // displays raw output - this is the only logger you really need to know

// there are 4 log levels in Javascript, these methods give you access to each
console.debug("logs at debug level.");
console.warn("logs at warn level.");
console.error("logs at error level.");
console.info("logs at info level.");

// the remaining logs are considered info level
console.dir(person); // wraps the output in a Javascript object
console.log(
    "%cnumber: %d %i %f, string: %s, object: %o %O", // format string
    "color : red; font-size : 16px;", // %c applys styling to the string, you can have more than 1
    10.5, // %d displays the output as an integrer
    10.5, // %i also displays the output as an integrer
    10.5, // %f displays the output as a float
    "ten point five", // %s displays the output as a string
    { 
        ten_point_five : 10.5 // %o displays the raw output
    },
    { 
        ten_point_five : 10.5 // %O displays the output as a Javascript object
    },
);

// info logs
console.group("Named group"); // allows you to nest logs together
console.log("Level 1"); // nested 1 level deep
console.groupCollapsed(); // this nesting will be initially collapsed
console.log("Level 2"); // nested 2 levels deep
console.groupEnd(); // close off a group
console.groupEnd(); // each group must be closed off individually

console.assert(person.age > 21, "this person cannot drink"); // only logs if the assertion is false-y

console.table([person]); // logs the list as a table

console.count("clicks"); // tracks the number of times it has been called with this argument
console.countReset("clicks"); // resets the tracker for this argument

console.time("how long does this take?"); // starts a timer for a given argument
console.timeEnd("how long does this take?"); // calculates the time between the start and end of the timer

console.trace(); // logs the stack trace, or the path the code took to get to this point

console.clear(); // clears the console

///////////////
// Operators //
///////////////

// You already know some of the operators in Javascript

const calculation = ((10 + 2) - (3 * 4)) / 2; // this follows the same order as PEMDAS

// One more arithmetic operator you may not know is the modulus operator
const remainder = 10 % 3; // this returns the remainder of the division

// there is also a Math utility to help you make more complex calculations
const math = Math.abs(Math.sin(Math.PI * 2) - Math.cos(Math.PI * 2)) * Math.sqrt(4) + Math.pow(2, 2); // and many more

// there are also several comparison operators
const equal = 1 == "1"; // checks if the values are equal
const strict_equal = 1 === "1"; // checks if the values and types are equal
const not_equal = 1 != "1"; // checks if the values are not equal
const strict_not_equal = 1 !== "1"; // checks if the values and types are not equal
const greater_than = 1 > 1; // checks if the first value is greater than the second
const greater_than_or_equal = 1 >= 1; // checks if the first value is greater than or equal to the second
const less_than = 1 < 1; // checks if the first value is less than the second
const less_than_or_equal = 1 <= 1; // checks if the first value is less than or equal to the second

// there are also several logical operators
const logical_and = true && true; // gives true when both are true
const logical_or = true || false; // gives true when either is true
const logical_not = !false; // gives true when false and false when true
const logical_xor = true ^ false; // gives true when only one is true - rarely used

// even more rarely used are bitwise operators
const bitwise_and = 0b1010 & 0b1100; // gives 0b1000
const bitwise_or = 0b1010 | 0b1100; // gives 0b1110
const bitwise_not = ~0b1010; // gives 0b0101
const bitwise_xor = 0b1010 ^ 0b1100; // gives 0b0110
const bitwise_left_shift = 0b1010 << 1; // gives 0b10100
const bitwise_right_shift = 0b1010 >> 1; // gives 0b101
